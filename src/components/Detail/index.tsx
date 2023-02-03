//홈에서 분실물,습득물 글들 클릭하면 자세한 정보나오는 페이지
import { useParams } from "react-router-dom";
import { DetailContainer } from "./style";
import DetailMore from "./DetailMore";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";
import NoData from "../Common/NoData";

const Detail = () => {
  const { lostfoundid } = useParams();
  return (
    <DetailContainer>
      <ErrorBoundary fallback={<NoData/>}>
        <Suspense fallback={<>Loading...</>}>
          <DetailMore lostfoundid={lostfoundid}/>
        </Suspense>
      </ErrorBoundary>
    </DetailContainer>
  );
};

export default Detail;
