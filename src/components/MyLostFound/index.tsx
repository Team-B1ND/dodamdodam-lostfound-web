import { Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary/ErrorBoundary";
import { MyLostFoundContainer } from "./style";
import MyLostFoundDetail from "./MyLostFoundDetail";
import LostFoundFallbackSkeleton from "../Common/FallbackSkeleton/LostFound";
import NoData from "../Common/NoData";
const MyLostFound = () => {
  return (
    <MyLostFoundContainer>
      <ErrorBoundary
        fallback={<NoData invalidate={"lostFound/getMyLostFounds"} />}
      >
        <Suspense fallback={<LostFoundFallbackSkeleton />}>
          <MyLostFoundDetail />
        </Suspense>
      </ErrorBoundary>
    </MyLostFoundContainer>
  );
};

export default MyLostFound;
