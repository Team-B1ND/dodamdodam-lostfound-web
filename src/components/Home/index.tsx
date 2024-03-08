//메인화면
import { Suspense } from "react";
import HomeList from "./HomeList";
import HomeDropdown from "./HomeDropdown";
import { HomeContainer, HomeWrap } from "./style";
import ErrorBoundary from "../Common/ErrorBoundary";
import HomeFallbackSkeleton from "../Common/Skeleton/Home";
import {
  useGetLostFoundsFoundType,
  useGetLostFoundsLostType,
} from "../../quries/lostFound/lostFound.query";

const Home = () => {
  return (
    <HomeContainer>
      <HomeDropdown />

      <HomeWrap>
        <ErrorBoundary fallback={<>전체 게시글을 불러오지 못했습니다.</>}>
          <Suspense fallback={<HomeFallbackSkeleton />}>
            <HomeDataFetching />
          </Suspense>
        </ErrorBoundary>
      </HomeWrap>
    </HomeContainer>
  );
};

const HomeDataFetching = () => {
  const {
    data: serverLostFoundFoundData,
    fetchNextPage: fetchLostFoundFoundNextPage,
  } = useGetLostFoundsFoundType({ suspense: true });

  const {
    data: serverLostFoundLostData,
    fetchNextPage: fetchLostFoundLostNextPage,
  } = useGetLostFoundsLostType({ suspense: true });

  return (
    <HomeList
      serverLostFoundFoundData={serverLostFoundFoundData!!}
      fetchLostFoundFoundNextPage={fetchLostFoundFoundNextPage}
      serverLostFoundLostData={serverLostFoundLostData!!}
      fetchLostFoundLostNextPage={fetchLostFoundLostNextPage}
    />
  );
};

export default Home;
