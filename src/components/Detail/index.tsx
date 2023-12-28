//홈에서 분실물,습득물 글들 클릭하면 자세한 정보나오는 페이지
import { useParams } from "react-router-dom";
import { DetailContainer } from "./style";
import DetailItem from "./DetailItem";
import ErrorBoundary from "../Common/ErrorBoundary";
import { Suspense } from "react";
import DetailFallback from "../Common/Skeleton/Detail";
import { useGetLostFound } from "../../quries/lostFound/lostFound.query";

const Detail = () => {
  const { lostfoundid } = useParams();
  return (
    <DetailContainer>
      <ErrorBoundary fallback={<>해당 게시글을 불러오지 못했습니다.</>}>
        <Suspense fallback={<DetailFallback />}>
          <DetailDataFetching lostfoundId={lostfoundid!!} />
        </Suspense>
      </ErrorBoundary>
    </DetailContainer>
  );
};

const DetailDataFetching = ({ lostfoundId }: { lostfoundId: string }) => {
  const { data: serverLostFoundDetailData } = useGetLostFound(
    { id: Number(lostfoundId) },
    { suspense: true }
  );

  return (
    <DetailItem
      lostfoundId={lostfoundId}
      serverLostFoundDetailData={serverLostFoundDetailData!!}
    />
  );
};

export default Detail;
