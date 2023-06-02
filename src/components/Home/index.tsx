//메인화면
import { Suspense } from "react";
import HomeList from "./HomeList";
import HomeDropdown from "./HomeDropdown";
import { HomeContainer, HomeWrap } from "./style";
import ErrorBoundary from "../Common/ErrorBoundary/ErrorBoundary";
import HomeFallbackSkeleton from "../Common/FallbackSkeleton/Home";
import NoData from "../Common/NoData";
const Home = () => {
  const arr: string[] = [
    "lostFound/getLostFoundsLostType",
    "lostFound/getLostFoundsFoundType",
  ];

  return (
    <HomeContainer>
      <HomeDropdown />
      <HomeWrap>
        <ErrorBoundary fallback={<NoData invalidate={arr} />}>
          <Suspense fallback={<HomeFallbackSkeleton />}>
            <HomeList />
          </Suspense>
        </ErrorBoundary>
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
