import { Member } from "../member/member.type";
import { Response } from "../util/response.type";

export interface LostFound {
  content: string;
  readonly createAt: string;
  readonly id: number;
  image: string;
  member: Member;
  place: string;
  title: string;
  type: LostFoundType;
}

export type LostFoundType = "FOUND" | "LOST";

export interface LostFoundsResponse extends Response {
  data: LostFound[];
  nextPage: number;
}
