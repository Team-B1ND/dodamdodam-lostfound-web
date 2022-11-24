import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import {
  getLostFoundParam,
  postLostFoundCommentParam,
  patchLostFoundCommentParam,
  deleteLostFoundCommentParam,
  postLostFoundParam,
  deleteLostFoundParam,
  patchLostFoundParam,
} from "../../repositories/lostFound/lostFound.param";
import lostFoundRepository from "../../repositories/lostFound/lostFound.repository";

export const useGetMyLostFounds = () =>
  useQuery(
    "lostFound/getMyLostFounds",
    () => lostFoundRepository.getMyLostFounds(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetLostFoundsLostType = () =>
  useInfiniteQuery(
    "lostFound/getLostFoundsLostType",
    ({ pageParam = 1 }) =>
      lostFoundRepository.getLostFoundsLostType({ page: pageParam }),

    {
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60 * 60,
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
      staleTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetLostFound = ({ id }: getLostFoundParam) =>
  useQuery(
    ["lostFound/getLostFound", id],
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

export const usePostLostFound = () => {
  const mutation = useMutation(({ data }: postLostFoundParam) =>
    lostFoundRepository.postLostFound({ data })
  );
  return mutation;
};

export const usePatchLostFound = () => {
  const mutation = useMutation(({ data, lostFoundId }: patchLostFoundParam) =>
    lostFoundRepository.patchLostFound({ data, lostFoundId })
  );

  return mutation;
};

export const useDeleteLostFound = () => {
  const mutation = useMutation(({ id }: deleteLostFoundParam) =>
    lostFoundRepository.deleteLostFound({ id })
  );

  return mutation;
};
