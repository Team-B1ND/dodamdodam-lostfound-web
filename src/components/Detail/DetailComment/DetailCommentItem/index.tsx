import { LostFoundComment } from "../../../../types/lostfound/lostfound.type";
import {
  DetailCommentItemContainer,
  DetailCommentItemInput,
  DetailCommentItemInputCloseButton,
  DetailCommentItemInputForm,
  DetailCommentItemProfileImg,
  DetailCommentItemProfileName,
  DetailCommentItemProfileWrap,
  DetailCommentItemText,
  DetailCommentItemTextWrap,
  DetailCommentMenuWrap,
} from "./style";
import DefaultProfileImage from "../../../../assets/image/common/defaultProfile.png";
import DetailCommentMenuDropdown from "./DetailCommentMenuDropdown";
import { useGetMyMember } from "../../../../quries/member/member.query";
import { FormEvent, memo, useState } from "react";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";

interface Props {
  data: LostFoundComment;
  onModifyComment: (e: FormEvent, comment: string, commentId: number) => void;
  onDeleteComment: (commentId: number) => void;
}

const DetailCommentItem = ({
  data,
  onModifyComment,
  onDeleteComment,
}: Props) => {
  const { data: serverMyMemberData } = useGetMyMember();
  const [comment, setComment] = useState<string>(data.comment);
  const [tempComment] = useState<string>(data.comment);
  const [isModify, setIsModify] = useState(false);

  const onCloseInput = () => {
    setIsModify(false);
    setComment(tempComment);
  };
  return (
        <DetailCommentItemContainer>
          <DetailCommentItemProfileWrap>
            <DetailCommentItemProfileImg src={data.member?.profileImage || DefaultProfileImage}/>
          </DetailCommentItemProfileWrap>
        <DetailCommentItemTextWrap>
          <DetailCommentItemProfileName>
            {data.member?.name}
          </DetailCommentItemProfileName>
          {isModify ? (
            <DetailCommentItemInputForm
              onSubmit={(e) => {
                onModifyComment(e, comment, data.id);
                setIsModify(false);
              }}>
              <DetailCommentItemInput
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.code === "Escape") {
                    onCloseInput();
                  }
                }}
              />
              <DetailCommentItemInputCloseButton onClick={onCloseInput}>
                <AiFillCloseCircle />
              </DetailCommentItemInputCloseButton>
            </DetailCommentItemInputForm>
            ) : (
            <DetailCommentItemText>{data.comment}</DetailCommentItemText>
          )}
      </DetailCommentItemTextWrap>
      {String(data.member.id) === String(serverMyMemberData?.data.member.id) &&
        !isModify && (
          <DetailCommentMenuWrap>
            <DetailCommentMenuDropdown
              setIsModify={setIsModify}
              commentId={data.id}
              onDeleteComment={onDeleteComment}
            />
          </DetailCommentMenuWrap>
        )}
        </DetailCommentItemContainer>
  );
};

export default memo(DetailCommentItem);