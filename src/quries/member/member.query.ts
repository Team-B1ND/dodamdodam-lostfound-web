import { useQuery } from "react-query";
import memberRepositoryImpl from "../../repositories/member/member.repositoryImpl";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyMember = () =>
  useQuery(
    QUERY_KEYS.member.getMyMember,
    () => memberRepositoryImpl.getMyMember(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
