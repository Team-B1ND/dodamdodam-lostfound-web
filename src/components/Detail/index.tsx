//홈에서 분실물,습득물 글들 클릭하면 자세한 정보나오는 페이지
import { useParams } from "react-router-dom";
import { DetailContainer } from "./style";
import DetailInfo from "./DetailInfo";
import ErrorBoundary from "../Common/ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";
import NoData from "../Common/NoData";
import DetailFallback from "../Common/FallbackSkeleton/Detail";

const Detail = () => {
  const { lostfoundId } = useParams();
  return (
    <DetailContainer>
      <ErrorBoundary
        fallback={<NoData invalidate={["lostFound/getLostFound"]} />}
      >
        <Suspense fallback={<DetailFallback />}>
          <DetailInfo lostfoundId={lostfoundId} />
        </Suspense>
      </ErrorBoundary>
    </DetailContainer>
  );
};

export default Detail;
