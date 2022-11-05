import { useEffect, useState } from "react";
import useComment from "../../../hooks/lostFound/useComment";
import { LostFoundComment } from "../../../types/lostfound/lostfound.type";
import DetailCommentItem from "./DetailCommentItem";
import {
  DetailCommentButton,
  DetailCommentContainer,
  DetailCommentForm,
  DetailCommentInput,
  DetailCommentWrap,
} from "./style";

interface Props {
  lostFoundId: number;
  data: LostFoundComment[];
}

const DetailComment = ({ data, lostFoundId }: Props) => {
  const { comment, onChangeComment, onSubmitComment } = useComment({
    lostFoundId,
  });

  return (
    <DetailCommentContainer>
      <DetailCommentForm onSubmit={onSubmitComment}>
        <DetailCommentInput
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={onChangeComment}
          maxLength={100}
        />
        <DetailCommentButton>등록</DetailCommentButton>
      </DetailCommentForm>
      <DetailCommentWrap>
        {data.map((item) => (
          <DetailCommentItem data={item} key={item.id} />
        ))}
      </DetailCommentWrap>
    </DetailCommentContainer>
  );
};

export default DetailComment;
