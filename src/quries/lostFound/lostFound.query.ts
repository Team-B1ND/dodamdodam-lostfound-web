import { AxiosError } from "axios";
import { useInfiniteQuery, 
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
import { LostFoundResponse,MyLostFoundsResponse,LostFoundsResponse } from "../../types/lostfound/lostfound.type";
import lostFoundRepository from "../../repositories/lostFound/lostFound.repository";

export const useGetMyLostFounds = (
  options?: UseQueryOptions<
  MyLostFoundsResponse,
  AxiosError,
  MyLostFoundsResponse,
  "lostFound/getMyLostFounds"
  >):UseQueryResult<MyLostFoundsResponse, AxiosError> =>useQuery(
    "lostFound/getMyLostFounds",
    () => lostFoundRepository.getMyLostFounds(),
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
  "lostFound/getLostFoundsLostType"
>
):UseInfiniteQueryResult<LostFoundsResponse,AxiosError>=>
  useInfiniteQuery(
    "lostFound/getLostFoundsLostType",
    ({ pageParam = 1 }) =>
      lostFoundRepository.getLostFoundsLostType({ page: pageParam }),
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
  "lostFound/getLostFoundsFoundType"
>
):UseInfiniteQueryResult<LostFoundsResponse,AxiosError> =>
  useInfiniteQuery(
    "lostFound/getLostFoundsFoundType",
    ({ pageParam = 1 }) =>
      lostFoundRepository.getLostFoundsFoundType({ page: pageParam }),
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
  ["lostFound/getLostFound", number]
>):UseQueryResult<LostFoundResponse, AxiosError> =>
  useQuery(
    ["lostFound/getLostFound", id],
    () => lostFoundRepository.getLostFound({ id }),
    {
      ...options,
      enabled: !!id,//true가 되면 lostFoundRepository를 실행
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
