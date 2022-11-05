import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostLostFoundComment } from "../../quries/lostFound/lostFound.query";
import { useGetMyMember } from "../../quries/member/member.query";

interface Param {
  lostFoundId: number;
}

const useComment = ({ lostFoundId }: Param) => {
  const queryClient = useQueryClient();
  const [comment, setComment] = useState<string>("");
  const { data } = useGetMyMember();

  const postPostLostFoundCommentMutation = usePostLostFoundComment();

  const onChangeComment = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value),
    [setComment]
  );

  const onSubmitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (postPostLostFoundCommentMutation.isLoading) {
      return;
    }

    postPostLostFoundCommentMutation.mutateAsync(
      {
        comment,
        lostFoundId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            "lostfound/useGetLostFound",
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
    onSubmitComment,
  };
};

export default useComment;
