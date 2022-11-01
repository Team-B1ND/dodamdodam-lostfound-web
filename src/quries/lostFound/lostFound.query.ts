import { useInfiniteQuery } from "react-query";
import lostFoundRepository from "../../repositories/lostFound/lostFound.repository";

export const useGetLostFoundsLostType = () =>
  useInfiniteQuery(
    "/lostFound/getLostFoundsLostType",
    ({ pageParam = 1 }) =>
      lostFoundRepository.getLostFoundsLostType({ page: pageParam }),
    {
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetLostFoundsFoundType = () =>
  useInfiniteQuery(
    "/lostFound/getLostFoundsFoundType",
    ({ pageParam = 1 }) =>
      lostFoundRepository.getLostFoundsFoundType({ page: pageParam }),
    {
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );
