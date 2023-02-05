import { Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary/ErrorBoundary";
import {
  MyLostFoundContainer,
} from "./style";
import MyLostFoundDetail from "./MyLostFoundDetail";
import FallbackSkeleton from "../Common/FallbackSkeleton";
import NoData from "../Common/NoData";

const MyLostFound = () => {
  return (
    <MyLostFoundContainer>
      <ErrorBoundary fallback={<h1 style={{ fontSize: "20px" }}>Error :( </h1>}>
        <Suspense fallback={<FallbackSkeleton/>}>
          <MyLostFoundDetail/>
        </Suspense>
      </ErrorBoundary>
    </MyLostFoundContainer>
  );
};

export default MyLostFound;