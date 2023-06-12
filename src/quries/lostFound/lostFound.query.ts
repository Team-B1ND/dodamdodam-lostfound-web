import { AxiosError } from "axios";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from "react-query";
import {
  getLostFoundParam,
  postLostFoundCommentParam,
  patchLostFoundCommentParam,
  deleteLostFoundCommentParam,
  postLostFoundParam,
  deleteLostFoundParam,
  patchLostFoundParam,
} from "../../repositories/lostFound/lostFound.param";
import {
  LostFoundResponse,
  MyLostFoundsResponse,
  LostFoundsResponse,
} from "../../types/lostfound/lostfound.type";
import lostFoundRepositoryImpl from "../../repositories/lostFound/lostFound.repositoryImpl";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyLostFounds = (
  options?: UseQueryOptions<
    MyLostFoundsResponse,
    AxiosError,
    MyLostFoundsResponse,
    string
  >
): UseQueryResult<MyLostFoundsResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.lostFound.getMyLostFounds,
    () => lostFoundRepositoryImpl.getMyLostFounds(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetLostFoundsLostType = (
  options?: UseInfiniteQueryOptions<
    LostFoundsResponse,
    AxiosError,
    LostFoundsResponse,
    LostFoundsResponse,
    string
  >
): UseInfiniteQueryResult<LostFoundsResponse, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.lostFound.getLostFoundsLostType,
    ({ pageParam = 1 }) =>
      lostFoundRepositoryImpl.getLostFoundsLostType({ page: pageParam }),
    {
      ...options,
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetLostFoundsFoundType = (
  options?: UseInfiniteQueryOptions<
    LostFoundsResponse,
    AxiosError,
    LostFoundsResponse,
    LostFoundsResponse,
    string
  >
): UseInfiniteQueryResult<LostFoundsResponse, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.lostFound.getLostFoundsFoundType,
    ({ pageParam = 1 }) =>
      lostFoundRepositoryImpl.getLostFoundsFoundType({ page: pageParam }),
    {
      ...options,
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetLostFound = (
  { id }: getLostFoundParam,
  options?: UseQueryOptions<
    LostFoundResponse,
    AxiosError,
    LostFoundResponse,
    (string | number)[]
  >
): UseQueryResult<LostFoundResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.lostFound.getLostFound(id),
    () => lostFoundRepositoryImpl.getLostFound({ id }),
    {
      ...options,
      enabled: !!id, //true가 되면 lostFoundRepository를 실행
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60,
    }
  );

export const usePostLostFoundComment = () => {
  const mutation = useMutation(
    ({ comment, lostFoundId }: postLostFoundCommentParam) =>
      lostFoundRepositoryImpl.postLostFoundComment({ comment, lostFoundId })
  );
  return mutation;
};

export const usePatchLostFoundComment = () => {
  const mutation = useMutation(
    ({ comment, commentId }: patchLostFoundCommentParam) =>
      lostFoundRepositoryImpl.patchLostFoundComment({ comment, commentId })
  );

  return mutation;
};

export const useDeleteLostFoundComment = () => {
  const mutation = useMutation(({ commentId }: deleteLostFoundCommentParam) =>
    lostFoundRepositoryImpl.deleteLostFoundComment({ commentId })
  );

  return mutation;
};

export const usePostLostFound = () => {
  const mutation = useMutation(({ data }: postLostFoundParam) =>
    lostFoundRepositoryImpl.postLostFound({ data })
  );
  return mutation;
};

export const usePatchLostFound = () => {
  const mutation = useMutation(({ data, lostFoundId }: patchLostFoundParam) =>
    lostFoundRepositoryImpl.patchLostFound({ data, lostFoundId })
  );

  return mutation;
};

export const useDeleteLostFound = () => {
  const mutation = useMutation(({ id }: deleteLostFoundParam) =>
    lostFoundRepositoryImpl.deleteLostFound({ id })
  );

  return mutation;
};
