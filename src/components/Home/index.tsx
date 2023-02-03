//메인화면
import { Suspense } from "react";
import HomeList from './HomeList';
import HomeDropdown from "./HomeDropdown";
import { HomeContainer, HomeWrap } from "./style";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Spinner from "../Common/Spinner/Spinner";
import NoData from "../Common/NoData";

const Home = () => {
  return (
    <HomeContainer>
      <HomeDropdown />
      <HomeWrap>
        {/* 서스펜스 태그로 감싸고 밑부분 컴포넌트로 만들기 */}
        <ErrorBoundary fallback={<NoData/>}>
          <Suspense fallback={<h1>loading..</h1>}>
            <HomeList/>
          </Suspense>
        </ErrorBoundary>
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
