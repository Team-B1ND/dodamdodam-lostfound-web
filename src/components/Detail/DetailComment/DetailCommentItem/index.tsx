import { LostFoundComment } from "../../../../types/lostfound/lostfound.type";
import {
  DetailCommentItemContainer,
  DetailCommentItemProfileImg,
  DetailCommentItemProfileName,
  DetailCommentItemProfileWrap,
  DetailCommentItemText,
  DetailCommentMenuWrap,
} from "./style";
import DefaultProfileImage from "../../../../assets/image/common/defaultProfile.png";
import DetailCommentMenuDropdown from "./DetailCommentMenuDropdown";
import { useGetMyMember } from "../../../../quries/member/member.query";

interface Props {
  data: LostFoundComment;
}

const DetailCommentItem = ({ data }: Props) => {
  const { data: serverMyMemberData } = useGetMyMember();

  return (
    <DetailCommentItemContainer>
      <DetailCommentItemProfileWrap>
        <DetailCommentItemProfileImg
          src={data.member?.profileImage || DefaultProfileImage}
        />
        <DetailCommentItemProfileName>
          {data.member?.name}
        </DetailCommentItemProfileName>
      </DetailCommentItemProfileWrap>
      <DetailCommentItemText>{data.comment}</DetailCommentItemText>
      {String(data.member.id) ===
        String(serverMyMemberData?.data.member.id) && (
        <DetailCommentMenuWrap>
          <DetailCommentMenuDropdown />
        </DetailCommentMenuWrap>
      )}
    </DetailCommentItemContainer>
  );
};

export default DetailCommentItem;
