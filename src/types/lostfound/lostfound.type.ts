import { Member } from "../member/member.type";
import { Response } from "../util/response.type";

export interface LostFoundPreview {
  content: string;
  readonly createAt: string;
  readonly id: number;
  image: string;
  member: Member;
  place: string;
  title: string;
  type: LostFoundType;
}

export interface LostFoundDetail extends LostFoundPreview {
  comment: LostFoundComment[];
}

export interface LostFoundComment {
  comment: string;
  id: number;
  member: Member;
}

export type LostFoundType = "FOUND" | "LOST";

export interface LostFoundsResponse extends Response {
  data: LostFoundPreview[];
  nextPage: number;
}

export interface LostFoundResponse extends Response {
  data: LostFoundDetail;
}

export interface MyLostFoundsResponse extends Response {
  data: LostFoundPreview[];
}
