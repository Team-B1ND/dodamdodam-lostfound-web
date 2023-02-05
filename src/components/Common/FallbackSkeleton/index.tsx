import { SkeletonItem } from "./style";

const FallbackSkeleton = () => {
  return (
    <>
        {Array.from({ length: 6 }).map((item, idx) => (
          <SkeletonItem key={idx}/>
        ))}
    </>
  );
};

export default FallbackSkeleton;