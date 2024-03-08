import { Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary";
import * as S from "./style";
import LostFoundFallbackSkeleton from "../Common/Skeleton/LostFound";
import { useGetMyLostFounds } from "../../quries/lostFound/lostFound.query";
import { AiOutlineFolderOpen } from "@react-icons/all-files/ai/AiOutlineFolderOpen";
import MyLostFoundItem from "./MyLostFoundListItem";

const MyLostFound = () => {
  return (
    <S.MyLostFoundContainer>
      <ErrorBoundary
        fallback={<>자신이 등록한 게시글을 가지고 오지 못했습니다.</>}
      >
        <Suspense fallback={<LostFoundFallbackSkeleton />}>
          <MyLostFoundDataFetching />
        </Suspense>
      </ErrorBoundary>
    </S.MyLostFoundContainer>
  );
};

const MyLostFoundDataFetching = () => {
  const { data: serverMyLostFoundData } = useGetMyLostFounds({
    suspense: true,
  });

  return (
    <>
      {serverMyLostFoundData?.data.length!! > 0 ? (
        <>
          {serverMyLostFoundData?.data.map((lostFound) => (
            <MyLostFoundItem data={lostFound} key={lostFound.id} />
          ))}
        </>
      ) : (
        <S.MyLostFoundEmptyWrap>
          <S.MyLostFoundEmptyIcon>
            <AiOutlineFolderOpen />
          </S.MyLostFoundEmptyIcon>
          등록한 분실물이 없습니다
        </S.MyLostFoundEmptyWrap>
      )}
    </>
  );
};

export default MyLostFound;
