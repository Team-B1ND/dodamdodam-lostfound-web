//메인화면
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
import { HomeContainer, HomeLoadingItem, HomeWrap } from "./style";

const Home = () => {
  const { ref, inView } = useInView();
  const [lostFoundType] = useRecoilState(homeLostFoundTypeAtom);

  const homeLoadingItemArray = Array.from({ length: 12 });

  const {
    data: serverLostFoundFoundData,
    fetchNextPage: fetchLostFoundFoundNextPage,
  } = useGetLostFoundsFoundType();

  const {
    data: serverLostFoundLostData,
    fetchNextPage: fetchLostFoundLostNextPage,
  } = useGetLostFoundsLostType();

  useEffect(() => {
    if (inView) {
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
        {homeLoadingItemArray.map((item, idx) => (
          <HomeLoadingItem key={idx} ref={ref} />
        ))}
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;
