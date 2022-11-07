import { HomeLoadingItem } from "./style";

const HomeLoading = () => {
  const homeLoadingItemArray = Array.from({ length: 12 });

  return (
    <>
      {homeLoadingItemArray.map((item) => (
        <HomeLoadingItem />
      ))}
    </>
  );
};

export default HomeLoading;
