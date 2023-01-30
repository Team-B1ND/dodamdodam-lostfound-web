import { useGetMyLostFounds } from "../../quries/lostFound/lostFound.query";
import MyLostFoundItem from "./MyLostFoundItem";
import {
  MyLostFoundContainer,
  MyLostFoundEmptyIcon,
  MyLostFoundEmptyWrap,
  MyLostFoundLoadingItem,
} from "./style";
import { AiOutlineFolderOpen } from "@react-icons/all-files/ai/AiOutlineFolderOpen";

const MyLostFound = () => {
  const {
    data: serverMyLostFoundData,
    isLoading: serverMyLostFoundDataIsLoading,
  } = useGetMyLostFounds();

  const loadingItemArray = Array.from({ length: 6 });//배열 6칸짜리 생성

  return (
    <MyLostFoundContainer>
      {serverMyLostFoundDataIsLoading ? (
        <>
          {loadingItemArray.map((item, idx) => (
            <MyLostFoundLoadingItem key={idx} />
          ))}
        </>
      ) : (
        <>
          {serverMyLostFoundData?.data.length === 0 ? (
            <MyLostFoundEmptyWrap>
              <MyLostFoundEmptyIcon>
                <AiOutlineFolderOpen />
              </MyLostFoundEmptyIcon>
              등록한 분실물이 없습니다
            </MyLostFoundEmptyWrap>
          ) : (
            <>
              {serverMyLostFoundData?.data.map((lostFound) => (
                <MyLostFoundItem data={lostFound} key={lostFound.id} />
              ))}
            </>
          )}
        </>
      )}
    </MyLostFoundContainer>
  );
};

export default MyLostFound;