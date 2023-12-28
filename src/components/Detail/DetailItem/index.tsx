import * as S from "../style";
import NoImage from "../.././../assets/image/common/noImage.svg";
import DefaultProfileImage from "../.././../assets/image/common/defaultProfile.png";
import TimeCounting from "time-counting";
import DetailComment from "../DetailComment";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { LostFoundResponse } from "../../../types/lostfound/lostfound.type";

interface Props {
  serverLostFoundDetailData: LostFoundResponse;
  lostfoundId: string;
}

const DetailItem = ({ serverLostFoundDetailData, lostfoundId }: Props) => {
  const { ...data } = serverLostFoundDetailData.data;

  return (
    <>
      <S.DetailWrap>
        <S.DetailImg src={data.image || NoImage} />
        <S.DetailProfileWrap>
          <S.DetailProfileInfoWrap>
            <S.DetailProfileImg
              src={data.member.profileImage || DefaultProfileImage}
            />

            <S.DetailProfileTextWrap>
              <S.DetailProfileName>{data.member.name}</S.DetailProfileName>
            </S.DetailProfileTextWrap>
          </S.DetailProfileInfoWrap>

          <S.DetailPlaceWrap>
            <S.DetailPlaceText>{data.place}</S.DetailPlaceText>
            <S.DetailPlaceIcon>
              <FaMapMarkerAlt />
            </S.DetailPlaceIcon>
          </S.DetailPlaceWrap>
        </S.DetailProfileWrap>

        <S.DetailContentWrap>
          <S.DetailContentTitle>{data.title}</S.DetailContentTitle>
          <S.DetailContentCreatedAt>
            {TimeCounting(data.createAt!, {
              lang: "ko",
            })}
          </S.DetailContentCreatedAt>
          <S.DetailContent>{data.content}</S.DetailContent>
          <S.DetailBottomText>
            {`댓글 ∙ ${data.comment.length}`}
          </S.DetailBottomText>
        </S.DetailContentWrap>

        <DetailComment lostFoundId={Number(lostfoundId)} data={data.comment!} />
      </S.DetailWrap>
    </>
  );
};

export default DetailItem;
