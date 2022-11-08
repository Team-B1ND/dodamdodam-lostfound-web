import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import {
  getLostFoundParam,
  postLostFoundCommentParam,
  patchLostFoundCommentParam,
  deleteLostFoundCommentParam,
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
    ({ comment, lostFoundId }: postLostFoundCommentParam) =>
      lostFoundRepository.postLostFoundComment({ comment, lostFoundId })
  );
  return mutation;
};

export const usePatchLostFoundComment = () => {
  const mutation = useMutation(
    ({ comment, commentId }: patchLostFoundCommentParam) =>
      lostFoundRepository.patchLostFoundComment({ comment, commentId })
  );

  return mutation;
};

export const useDeleteLostFoundComment = () => {
  const mutation = useMutation(({ commentId }: deleteLostFoundCommentParam) =>
    lostFoundRepository.deleteLostFoundComment({ commentId })
  );

  return mutation;
};
