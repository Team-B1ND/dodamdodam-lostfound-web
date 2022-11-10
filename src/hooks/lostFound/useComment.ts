import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useDeleteLostFoundComment,
  usePatchLostFoundComment,
  usePostLostFoundComment,
} from "../../quries/lostFound/lostFound.query";

interface Param {
  lostFoundId: number;
}

const useComment = ({ lostFoundId }: Param) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState<string>("");

  const postLostFoundCommentMutation = usePostLostFoundComment();
  const patchLostFoundCommentMutation = usePatchLostFoundComment();
  const deleteLostFoundCommentMutation = useDeleteLostFoundComment();

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
            "lostfound/getLostFound",
            lostFoundId,
          ]);
          window.alert("댓글 수정 성공");
        },
        onError: () => {
          window.alert("댓글 수정 실패");
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
            "lostfound/getLostFound",
            lostFoundId,
          ]);
          window.alert("댓글 삭제 성공");
        },
        onError: () => {
          window.alert("댓글 삭제 실패");
        },
      }
    );
  };

  const onSubmitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (postLostFoundCommentMutation.isLoading) {
      return;
    }

    postLostFoundCommentMutation.mutateAsync(
      {
        comment,
        lostFoundId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            "lostfound/getLostFound",
            lostFoundId,
          ]);
          window.alert("댓글 등록 성공");
          setComment("");
        },
        onError: () => {
          window.alert("댓글 등록 실패");
        },
      }
    );
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
