import {
  LostFoundResponse,
  LostFoundsResponse,
  MyLostFoundsResponse,
} from "../../types/lostfound/lostfound.type";
import {
  deleteLostFoundCommentParam,
  deleteLostFoundParam,
  getLostFoundParam,
  getLostFoundsFoundTypeParam,
  getLostFoundsLostTypeParam,
  patchLostFoundCommentParam,
  patchLostFoundParam,
  postLostFoundCommentParam,
  postLostFoundParam,
} from "./lostFound.param";

export interface LostFoundRepository {
  getMyLostFounds(): Promise<MyLostFoundsResponse>;
  getLostFoundsLostType({
    page,
  }: getLostFoundsLostTypeParam): Promise<LostFoundsResponse>;

  getLostFoundsFoundType({
    page,
  }: getLostFoundsFoundTypeParam): Promise<LostFoundsResponse>;

  getLostFound({ id }: getLostFoundParam): Promise<LostFoundResponse>;

  postLostFoundComment({
    comment,
    lostFoundId,
  }: postLostFoundCommentParam): Promise<void>;

  patchLostFoundComment({
    comment,
    commentId,
  }: patchLostFoundCommentParam): Promise<void>;

  deleteLostFoundComment({
    commentId,
  }: deleteLostFoundCommentParam): Promise<void>;

  postLostFound({ data }: postLostFoundParam): Promise<void>;

  patchLostFound({ data, lostFoundId }: patchLostFoundParam): Promise<void>;

  deleteLostFound({ id }: deleteLostFoundParam): Promise<void>;
}
