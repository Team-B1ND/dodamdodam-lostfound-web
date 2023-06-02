import { MyMemberResponse } from "../../types/member/member.type";

export interface MemberRepository {
  getMyMember(): Promise<MyMemberResponse>;
}
