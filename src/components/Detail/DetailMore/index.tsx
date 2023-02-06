import * as S from "../style";
import NoImage from '../.././../assets/image/common/noImage.svg';
import DefaultProfileImage from "../.././../assets/image/common/defaultProfile.png";
import TimeCounting from "time-counting";
import DetailComment from "../DetailComment";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { useGetLostFound } from "../.././../quries/lostFound/lostFound.query";

export default function DetailMore({lostfoundid}:{lostfoundid:string|undefined}){
    const {
        data: serverLostFoundDetailData,
        //isLoading: serverLostFoundDetailDataIsLoading,
    } = useGetLostFound({ id: Number(lostfoundid)},{suspense:true});

    return(
        <>
            {(
                <S.DetailWrap>
                    <S.DetailImg src={serverLostFoundDetailData?.data.image || NoImage} />
                        <S.DetailProfileWrap>
                            <S.DetailProfileInfoWrap>
                                <S.DetailProfileImg
                                    src={
                                    serverLostFoundDetailData?.data.member.profileImage ||
                                    DefaultProfileImage
                                    }
                                />
                                <S.DetailProfileTextWrap>
                                    <S.DetailProfileName>
                                        {serverLostFoundDetailData?.data.member.name}
                                    </S.DetailProfileName>
                                </S.DetailProfileTextWrap>
                            </S.DetailProfileInfoWrap>
                            <S.DetailPlaceWrap>
                                <S.DetailPlaceText>
                                    {serverLostFoundDetailData?.data.place}
                                </S.DetailPlaceText>
                                <S.DetailPlaceIcon>
                                    <FaMapMarkerAlt />
                                </S.DetailPlaceIcon>
                            </S.DetailPlaceWrap>
                        </S.DetailProfileWrap>
                        <S.DetailContentWrap>
                            <S.DetailContentTitle>
                                {serverLostFoundDetailData?.data.title}
                            </S.DetailContentTitle>
                            <S.DetailContentCreatedAt>
                                {TimeCounting(serverLostFoundDetailData?.data.createAt!, {
                                    lang: "ko",
                                })}
                            </S.DetailContentCreatedAt>
                            <S.DetailContent>
                                {serverLostFoundDetailData?.data.content}
                            </S.DetailContent>
                            <S.DetailBottomText>
                                {`댓글 ∙ ${serverLostFoundDetailData?.data.comment.length}`}
                            </S.DetailBottomText>
                        </S.DetailContentWrap>
                        <DetailComment
                            lostFoundId={Number(lostfoundid)}
                            data={serverLostFoundDetailData?.data.comment!}
                        />
                </S.DetailWrap>
            )}
        </>
    );
}