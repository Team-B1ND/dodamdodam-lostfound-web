//홈에서 분실물,습득물 글들 클릭하면 자세한 정보나오는 페이지
import { useParams } from "react-router-dom";
import { useGetLostFound } from "../../quries/lostFound/lostFound.query";
import {
  DetailBottomText,
  DetailContainer,
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
} from "./style";
import NoImage from "../../assets/image/common/noImage.svg";
import DefaultProfileImage from "../../assets/image/common/defaultProfile.png";
import TimeCounting from "time-counting";
import DetailComment from "./DetailComment";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import Spinner from "../Common/Spinner/Spinner";
import NoData from "../Common/NoData";
const Detail = () => {
  const { lostfoundid } = useParams();

  const {
    data: serverLostFoundDetailData,
    //isLoading: serverLostFoundDetailDataIsLoading,
  } = useGetLostFound({ id: Number(lostfoundid) });

  return (
    <DetailContainer>
      <ErrorBoundary fallback={<NoData/>}>
        <Suspense fallback={<Spinner isLoading isAbsolute={true}/>}>
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
      </Suspense>
      </ErrorBoundary>
    </DetailContainer>
  );
};

export default Detail;
//================================================
// import { useParams } from "react-router-dom";
// import { useGetLostFound } from "../../quries/lostFound/lostFound.query";
// import {
//   DetailBottomText,
//   DetailContainer,
//   DetailContent,
//   DetailContentCreatedAt,
//   DetailContentTitle,
//   DetailContentWrap,
//   DetailImg,
//   DetailPlaceIcon,
//   DetailPlaceText,
//   DetailPlaceWrap,
//   DetailProfileImg,
//   DetailProfileInfoWrap,
//   DetailProfileName,
//   DetailProfileTextWrap,
//   DetailProfileWrap,
//   DetailWrap,
// } from "./style";
// import NoImage from "../../assets/image/common/noImage.svg";
// import DefaultProfileImage from "../../assets/image/common/defaultProfile.png";
// import TimeCounting from "time-counting";
// import DetailComment from "./DetailComment";
// import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

// const Detail = () => {
//   const { lostfoundid } = useParams();

//   const {
//     data: serverLostFoundDetailData,
//     isLoading: serverLostFoundDetailDataIsLoading,
//   } = useGetLostFound({ id: Number(lostfoundid) });

//   return (
//     <DetailContainer>
//       {!serverLostFoundDetailDataIsLoading && (
//         <DetailWrap>
//           <DetailImg src={serverLostFoundDetailData?.data.image || NoImage} />
//           <DetailProfileWrap>
//             <DetailProfileInfoWrap>
//               <DetailProfileImg
//                 src={
//                   serverLostFoundDetailData?.data.member.profileImage ||
//                   DefaultProfileImage
//                 }
//               />
//               <DetailProfileTextWrap>
//                 <DetailProfileName>
//                   {serverLostFoundDetailData?.data.member.name}
//                 </DetailProfileName>
//               </DetailProfileTextWrap>
//             </DetailProfileInfoWrap>
//             <DetailPlaceWrap>
//               <DetailPlaceText>
//                 {serverLostFoundDetailData?.data.place}
//               </DetailPlaceText>
//               <DetailPlaceIcon>
//                 <FaMapMarkerAlt />
//               </DetailPlaceIcon>
//             </DetailPlaceWrap>
//           </DetailProfileWrap>
//           <DetailContentWrap>
//             <DetailContentTitle>
//               {serverLostFoundDetailData?.data.title}
//             </DetailContentTitle>
//             <DetailContentCreatedAt>
//               {TimeCounting(serverLostFoundDetailData?.data.createAt!, {
//                 lang: "ko",
//               })}
//             </DetailContentCreatedAt>
//             <DetailContent>
//               {serverLostFoundDetailData?.data.content}
//             </DetailContent>
//             <DetailBottomText>
//               {`댓글 ∙ ${serverLostFoundDetailData?.data.comment.length}`}
//             </DetailBottomText>
//           </DetailContentWrap>
//           <DetailComment
//             lostFoundId={Number(lostfoundid)}
//             data={serverLostFoundDetailData?.data.comment!}
//           />
//         </DetailWrap>
//       )}
//     </DetailContainer>
//   );
// };

// export default Detail;
