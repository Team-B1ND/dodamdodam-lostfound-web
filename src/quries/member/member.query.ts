import { useQuery } from "react-query";
import memberRepository from "../../repositories/member/member.repository";
export const useGetMyMember = () =>
  useQuery("member/getMyMember",()=> memberRepository.getMyMember(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
