import { useGetMyLostFounds } from "../../quries/lostFound/lostFound.query";
import MyLostFoundItem from "./MyLostFoundItem";
import { MyLostFoundContainer } from "./style";

const MyLostFound = () => {
  const {
    data: serverMyLostFoundData,
    isLoading: serverMyLostFoundDataIsLoading,
  } = useGetMyLostFounds();

  return (
    <MyLostFoundContainer>
      {serverMyLostFoundDataIsLoading ? (
        <>loading...</>
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
