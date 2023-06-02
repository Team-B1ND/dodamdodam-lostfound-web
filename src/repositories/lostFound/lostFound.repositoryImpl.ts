import customAxios from "../../lib/axios";
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
import { LostFoundRepository } from "./lostFound.repository";

class LostFoundRepositoryImpl implements LostFoundRepository {
  public async getMyLostFounds(): Promise<MyLostFoundsResponse> {
    const { data } = await customAxios.get("/lostfound/my");
    return data;
  }

  public async getLostFoundsLostType({
    page,
  }: getLostFoundsLostTypeParam): Promise<LostFoundsResponse> {
    const { data } = await customAxios.get(
      `/lostfound?limit=${12}&page=${page}&type=LOST`
    );

    return { ...data, nextPage: page + 1 };
  }

  public async getLostFoundsFoundType({
    page,
  }: getLostFoundsFoundTypeParam): Promise<LostFoundsResponse> {
    const { data } = await customAxios.get(
      `/lostfound?limit=${12}&page=${page}&type=FOUND`
    );

    return { ...data, nextPage: page + 1 };
  }

  public async getLostFound({
    id,
  }: getLostFoundParam): Promise<LostFoundResponse> {
    const { data } = await customAxios.get(`/lostfound/${id}`);
    return data;
  }

  public async postLostFoundComment({
    comment,
    lostFoundId,
  }: postLostFoundCommentParam): Promise<void> {
    await customAxios.post(`/lostfound/comment`, {
      comment,
      lostFoundId,
    });
  }

  public async patchLostFoundComment({
    comment,
    commentId,
  }: patchLostFoundCommentParam): Promise<void> {
    await customAxios.patch("/lostfound/comment", {
      comment,
      commentId,
    });
  }

  public async deleteLostFoundComment({
    commentId,
  }: deleteLostFoundCommentParam): Promise<void> {
    await customAxios.delete(`/lostfound/comment/${commentId}`);
  }

  public async postLostFound({ data }: postLostFoundParam): Promise<void> {
    await customAxios.post("/lostfound", data);
  }

  public async patchLostFound({
    data,
    lostFoundId,
  }: patchLostFoundParam): Promise<void> {
    await customAxios.patch("/lostfound", { ...data, lostFoundId });
  }

  public async deleteLostFound({ id }: deleteLostFoundParam): Promise<void> {
    await customAxios.delete(`/lostfound/${id}`);
  }
}

export default new LostFoundRepositoryImpl();
