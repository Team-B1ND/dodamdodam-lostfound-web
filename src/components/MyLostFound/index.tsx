import { useGetMyLostFounds } from "../../quries/lostFound/lostFound.query";
import MyLostFoundItem from "./MyLostFoundItem";
import { MyLostFoundContainer, MyLostFoundLoadingItem } from "./style";

const MyLostFound = () => {
  const {
    data: serverMyLostFoundData,
    isLoading: serverMyLostFoundDataIsLoading,
  } = useGetMyLostFounds();

  const loadingItemArray = Array.from({ length: 6 });

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
          {serverMyLostFoundData?.data.map((lostFound) => (
            <MyLostFoundItem data={lostFound} key={lostFound.id} />
          ))}
        </>
      )}
    </MyLostFoundContainer>
  );
};

export default MyLostFound;
