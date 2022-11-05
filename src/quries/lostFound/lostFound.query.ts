import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import {
  getLostFoundParam,
  postLostfoundCommentParam,
} from "../../repositories/lostFound/lostFound.param";
import lostFoundRepository from "../../repositories/lostFound/lostFound.repository";

export const useGetLostFoundsLostType = () =>
  useInfiniteQuery(
    "lostFound/getLostFoundsLostType",
    ({ pageParam = 1 }) =>
      lostFoundRepository.getLostFoundsLostType({ page: pageParam }),

    {
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetLostFoundsFoundType = () =>
  useInfiniteQuery(
    "lostFound/getLostFoundsFoundType",
    ({ pageParam = 1 }) =>
      lostFoundRepository.getLostFoundsFoundType({ page: pageParam }),
    {
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetLostFound = ({ id }: getLostFoundParam) =>
  useQuery(
    ["lostfound/useGetLostFound", id],
    () => lostFoundRepository.getLostFound({ id }),
    {
      enabled: !!id,
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60,
    }
  );

export const usePostLostFoundComment = () => {
  const mutation = useMutation(
    ({ comment, lostFoundId }: postLostfoundCommentParam) =>
      lostFoundRepository.postLostfoundComment({ comment, lostFoundId })
  );
  return mutation;
};
