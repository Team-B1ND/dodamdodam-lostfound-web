import { HomeLoadingItem } from "../style";

const HomeFallbackSkeleton = () => {
  return (
    <>
        {Array.from({ length: 12 }).map((item, idx) => (
          <HomeLoadingItem key={idx}/>
        ))}
    </>
  );
};

export default HomeFallbackSkeleton;