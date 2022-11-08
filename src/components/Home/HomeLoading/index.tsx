import { HomeLoadingItem } from "./style";

const HomeLoading = () => {
  const homeLoadingItemArray = Array.from({ length: 12 });

  return (
    <>
      {homeLoadingItemArray.map((item, idx) => (
        <HomeLoadingItem key={idx} />
      ))}
    </>
  );
};

export default HomeLoading;
