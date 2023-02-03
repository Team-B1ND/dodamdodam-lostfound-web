import {
    DetailBottomText,
    DetailContent,
    DetailContentCreatedAt,
    DetailContentTitle,
    DetailContentWrap,
    DetailImg,
    DetailPlaceIcon,
    DetailPlaceText,
    DetailPlaceWrap,
    DetailProfileImg,
    DetailProfileInfoWrap,
    DetailProfileName,
    DetailProfileTextWrap,
    DetailProfileWrap,
    DetailWrap,
} from "../style";
import NoImage from '../.././../assets/image/common/noImage.svg';
import DefaultProfileImage from "../.././../assets/image/common/defaultProfile.png";
import TimeCounting from "time-counting";
import DetailComment from "../DetailComment";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { useGetLostFound } from "../.././../quries/lostFound/lostFound.query";
import { ParamType } from "../../../types/param/param.type";

export default function DetailMore({lostfoundid}:{lostfoundid:ParamType}){
    const {
        data: serverLostFoundDetailData,
        //isLoading: serverLostFoundDetailDataIsLoading,
    } = useGetLostFound({ id: Number(lostfoundid)});
    return(
        <>
            {(
                <DetailWrap>
                    <DetailImg src={serverLostFoundDetailData?.data.image || NoImage} />
                        <DetailProfileWrap>
                            <DetailProfileInfoWrap>
                                <DetailProfileImg
                                    src={
                                    serverLostFoundDetailData?.data.member.profileImage ||
                                    DefaultProfileImage
                                    }
                                />
                                <DetailProfileTextWrap>
                                    <DetailProfileName>
                                        {serverLostFoundDetailData?.data.member.name}
                                    </DetailProfileName>
                                </DetailProfileTextWrap>
                            </DetailProfileInfoWrap>
                            <DetailPlaceWrap>
                                <DetailPlaceText>
                                    {serverLostFoundDetailData?.data.place}
                                </DetailPlaceText>
                                <DetailPlaceIcon>
                                    <FaMapMarkerAlt />
                                </DetailPlaceIcon>
                            </DetailPlaceWrap>
                        </DetailProfileWrap>
                        <DetailContentWrap>
                            <DetailContentTitle>
                                {serverLostFoundDetailData?.data.title}
                            </DetailContentTitle>
                            <DetailContentCreatedAt>
                                {TimeCounting(serverLostFoundDetailData?.data.createAt!, {
                                    lang: "ko",
                                })}
                            </DetailContentCreatedAt>
                            <DetailContent>
                                {serverLostFoundDetailData?.data.content}
                            </DetailContent>
                            <DetailBottomText>
                                {`댓글 ∙ ${serverLostFoundDetailData?.data.comment.length}`}
                            </DetailBottomText>
                        </DetailContentWrap>
                        <DetailComment
                            lostFoundId={Number(lostfoundid)}
                            data={serverLostFoundDetailData?.data.comment!}
                        />
                </DetailWrap>
            )}
        </>
    );
}
//================================================
// import {
//     DetailBottomText,
//     DetailContent,
//     DetailContentCreatedAt,
//     DetailContentTitle,
//     DetailContentWrap,
//     DetailImg,
//     DetailPlaceIcon,
//     DetailPlaceText,
//     DetailPlaceWrap,
//     DetailProfileImg,
//     DetailProfileInfoWrap,
//     DetailProfileName,
//     DetailProfileTextWrap,
//     DetailProfileWrap,
//     DetailWrap,
// } from "../style";
// import NoImage from '../.././../assets/image/common/noImage.svg';
// import DefaultProfileImage from "../.././../assets/image/common/defaultProfile.png";
// import TimeCounting from "time-counting";
// import DetailComment from "../DetailComment";
// import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
// import { useGetLostFound } from "../.././../quries/lostFound/lostFound.query";
// import { ParamType } from "../../../types/param/param.type";

// export default function DetailMore({lostfoundid}:{lostfoundid:ParamType}){
//     const {
//         data: serverLostFoundDetailData,
//         isLoading: serverLostFoundDetailDataIsLoading,
//     } = useGetLostFound({ id: Number(lostfoundid)});
//     return(
//         <>
//             {!serverLostFoundDetailDataIsLoading && (
//                 <DetailWrap>
//                     <DetailImg src={serverLostFoundDetailData?.data.image || NoImage} />
//                         <DetailProfileWrap>
//                             <DetailProfileInfoWrap>
//                                 <DetailProfileImg
//                                     src={
//                                     serverLostFoundDetailData?.data.member.profileImage ||
//                                     DefaultProfileImage
//                                     }
//                                 />
//                                 <DetailProfileTextWrap>
//                                     <DetailProfileName>
//                                         {serverLostFoundDetailData?.data.member.name}
//                                     </DetailProfileName>
//                                 </DetailProfileTextWrap>
//                             </DetailProfileInfoWrap>
//                             <DetailPlaceWrap>
//                                 <DetailPlaceText>
//                                     {serverLostFoundDetailData?.data.place}
//                                 </DetailPlaceText>
//                                 <DetailPlaceIcon>
//                                     <FaMapMarkerAlt />
//                                 </DetailPlaceIcon>
//                             </DetailPlaceWrap>
//                         </DetailProfileWrap>
//                         <DetailContentWrap>
//                             <DetailContentTitle>
//                                 {serverLostFoundDetailData?.data.title}
//                             </DetailContentTitle>
//                             <DetailContentCreatedAt>
//                                 {TimeCounting(serverLostFoundDetailData?.data.createAt!, {
//                                     lang: "ko",
//                                 })}
//                             </DetailContentCreatedAt>
//                             <DetailContent>
//                                 {serverLostFoundDetailData?.data.content}
//                             </DetailContent>
//                             <DetailBottomText>
//                                 {`댓글 ∙ ${serverLostFoundDetailData?.data.comment.length}`}
//                             </DetailBottomText>
//                         </DetailContentWrap>
//                         <DetailComment
//                             lostFoundId={Number(lostfoundid)}
//                             data={serverLostFoundDetailData?.data.comment!}
//                         />
//                 </DetailWrap>
//             )}
//         </>
//     );
// }