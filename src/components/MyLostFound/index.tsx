import { Suspense } from "react";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import NoData from "../Common/NoData";
import {
  MyLostFoundContainer,
} from "./style";
import MyLostFoundDetail from "./MyLostFoundDetail";

const MyLostFound = () => {
  return (
    <MyLostFoundContainer>
      <ErrorBoundary fallback={<NoData/>}>
        <Suspense fallback={<>loading...</>}>
          <MyLostFoundDetail/>
        </Suspense>
      </ErrorBoundary>
    </MyLostFoundContainer>
  );
};

export default MyLostFound;