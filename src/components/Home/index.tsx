import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import {
  useGetLostFoundsFoundType,
  useGetLostFoundsLostType,
} from "../../quries/lostFound/lostFound.query";
import { homeLostFoundTypeAtom } from "../../store/home/home.store";
import HomeDropdown from "./HomeDropdown";
import HomeItem from "./HomeItem";
import { HomeContainer, HomeWrap } from "./style";

const Home = () => {
  const { ref, inView } = useInView();
  const [lostFoundType, setLostFoundType] = useRecoilState(
    homeLostFoundTypeAtom
  );

  const {
    data: serverLostFoundFoundData,
    isLoading: serverLostFoundFoundDataIsLoading,
    fetchNextPage: fetchLostFoundFoundNextPage,
  } = useGetLostFoundsFoundType();

  const {
    data: serverLostFoundLostData,
    isLoading: serverLostFoundLostDataIsLoading,
    fetchNextPage: fetchLostFoundLostNextPage,
  } = useGetLostFoundsLostType();

  useEffect(() => {
    if (inView) {
      console.log(lostFoundType);
      if (lostFoundType === "LOST") {
        fetchLostFoundLostNextPage();
      } else {
        fetchLostFoundFoundNextPage();
      }
    }
  }, [inView, lostFoundType]);

  return (
    <HomeContainer>
      <HomeDropdown />
      <HomeWrap>
        {(() => {
          return lostFoundType === "LOST"
            ? serverLostFoundLostData
            : serverLostFoundFoundData;
        })()?.pages?.map((page) =>
          page.data.map((item) => <HomeItem data={item} key={item.id} />)
        )}
        <div ref={ref}>loading...</div>
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
