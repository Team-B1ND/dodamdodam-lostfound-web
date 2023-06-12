import customAxios from "../../lib/axios";
import { MyMemberResponse } from "../../types/member/member.type";
import { MemberRepository } from "./member.repository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await customAxios.get("/members/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
