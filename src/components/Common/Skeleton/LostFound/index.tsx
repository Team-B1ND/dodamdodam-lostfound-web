import { LostFoundSkeletonItem } from "./style";

const LostFoundFallbackSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((item, idx) => (
        <LostFoundSkeletonItem key={idx} />
      ))}
    </>
  );
};

export default LostFoundFallbackSkeleton;
