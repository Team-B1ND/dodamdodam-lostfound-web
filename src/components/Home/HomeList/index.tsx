//메인화면
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import { homeLostFoundTypeAtom } from "../../../stores/home/home.store";
import HomeListItem from "./HomeListItem";
import { LostFoundsResponse } from "../../../types/lostfound/lostfound.type";
import { InfiniteData } from "react-query";

interface Props {
  serverLostFoundFoundData: InfiniteData<LostFoundsResponse>;
  fetchLostFoundFoundNextPage: () => void;

  serverLostFoundLostData: InfiniteData<LostFoundsResponse>;
  fetchLostFoundLostNextPage: () => void;
}

const HomeList = ({
  serverLostFoundFoundData,
  fetchLostFoundFoundNextPage,
  serverLostFoundLostData,
  fetchLostFoundLostNextPage,
}: Props) => {
  const { ref, inView } = useInView();
  const [lostFoundType] = useRecoilState(homeLostFoundTypeAtom);

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
    <>
      {(() => {
        return lostFoundType === "LOST"
          ? serverLostFoundLostData
          : serverLostFoundFoundData;
      })()?.pages?.map((page) =>
        page.data.map((item) => <HomeListItem data={item} key={item.id} />)
      )}
      <div ref={ref} />
    </>
  );
};

export default HomeList;
