import customAxios from "../../lib/axios";
import { MyMemberResponse } from "../../types/member/member.type";

class MemberRepository {
  public async getMyMember(): Promise<MyMemberResponse>{
    const { data } = await customAxios.get("/members/my");
    return data;
  }
}

export default new MemberRepository();
