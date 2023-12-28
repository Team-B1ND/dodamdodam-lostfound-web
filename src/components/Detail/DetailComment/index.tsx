import { memo } from "react";
import useComment from "../../../hooks/lostFound/useComment";
import { LostFoundComment } from "../../../types/lostfound/lostfound.type";
import Spinner from "../../Common/Spinner/Spinner";
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
  const { ...hooks } = useComment({
    lostFoundId,
  });

  const { postCommentLoading, patchCommentLoading, deleteCommentLoading } =
    hooks;

  return (
    <DetailCommentContainer>
      <DetailCommentForm onSubmit={hooks.onSubmitComment}>
        <DetailCommentInput
          placeholder="댓글을 입력해주세요"
          value={hooks.comment}
          onChange={hooks.onChangeComment}
          maxLength={100}
        />
        <DetailCommentButton>등록</DetailCommentButton>
      </DetailCommentForm>
      <DetailCommentWrap>
        {data.map((item) => (
          <DetailCommentItem
            data={item}
            key={item.id}
            onModifyComment={hooks.onModifyComment}
            onDeleteComment={hooks.onDeleteComment}
          />
        ))}
      </DetailCommentWrap>
      <Spinner
        isAbsolute
        isLoading={
          postCommentLoading || patchCommentLoading || deleteCommentLoading
        }
      />
    </DetailCommentContainer>
  );
};

export default memo(DetailComment);
