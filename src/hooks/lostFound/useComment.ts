import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostModuleLog } from "../../quries/log/log.query";
import {
  useDeleteLostFoundComment,
  usePatchLostFoundComment,
  usePostLostFoundComment,
} from "../../quries/lostFound/lostFound.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

interface Param {
  lostFoundId: number;
}

const useComment = ({ lostFoundId }: Param) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState<string>("");

  const postLostFoundCommentMutation = usePostLostFoundComment();
  const patchLostFoundCommentMutation = usePatchLostFoundComment();
  const deleteLostFoundCommentMutation = useDeleteLostFoundComment();
  const postModuleLogMutation = usePostModuleLog();

  const onChangeComment = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value),
    [setComment]
  );

  const onModifyComment = async (
    e: FormEvent,
    comment: string,
    commentId: number
  ) => {
    e.preventDefault();
    if (patchLostFoundCommentMutation.isLoading) {
      return;
    }

    patchLostFoundCommentMutation.mutateAsync(
      { comment, commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            "lostFound/getLostFound",
            lostFoundId,
          ]);
          postModuleLogMutation.mutate({
            description: "분실물/습득물 댓글 수정",
            moduleName: "분실물/습득물 댓글 수정",
          });
        },
      }
    );
  };

  const onDeleteComment = (commentId: number) => {
    if (deleteLostFoundCommentMutation.isLoading) {
      return;
    }

    deleteLostFoundCommentMutation.mutateAsync(
      { commentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            "lostFound/getLostFound",
            lostFoundId,
          ]);
          postModuleLogMutation.mutate({
            description: "분실물/습득물 댓글 삭제",
            moduleName: "분실물/습득물 댓글 삭제",
          });
        },
      }
    );
  };

  const onSubmitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (postLostFoundCommentMutation.isLoading) {
      return;
    }

    if (comment) {
      postLostFoundCommentMutation.mutateAsync(
        {
          comment,
          lostFoundId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([
              "lostFound/getLostFound",
              lostFoundId,
            ]);
            postModuleLogMutation.mutate({
              description: "분실물/습득물 댓글 등록",
              moduleName: "분실물/습득물 댓글 등록",
            });
            setComment("");
          },
        }
      );
    } else {
      B1ndToast.showInfo("댓글을 입력해주세요.");
    }
  };

  return {
    comment,
    onChangeComment,
    onModifyComment,
    onDeleteComment,
    onSubmitComment,
    postCommentLoading: postLostFoundCommentMutation.isLoading,
    patchCommentLoading: patchLostFoundCommentMutation.isLoading,
    deleteCommentLoading: deleteLostFoundCommentMutation.isLoading,
  };
};

export default useComment;
