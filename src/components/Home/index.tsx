//메인화면
import { Suspense } from "react";
import HomeList from './HomeList';
import HomeDropdown from "./HomeDropdown";
import { HomeContainer, HomeWrap } from "./style";
import ErrorBoundary from "../Common/ErrorBoundary/ErrorBoundary";
import HomeFallbackSkeleton from "./HomeFallbackSkeleton";
import NoData from "../Common/NoData";

const Home = () => {
  return (
    <HomeContainer>
      <HomeDropdown />
      <HomeWrap>
        <ErrorBoundary fallback={<h1 style={{ fontSize: "20px" }}>Error :( </h1>}>
          <Suspense fallback={<HomeFallbackSkeleton/>}>
            <HomeList/>
          </Suspense>
        </ErrorBoundary>
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
