import customAxios from "../../lib/axios";
import {
  LostFoundResponse,
  LostFoundsResponse,
} from "../../types/lostfound/lostfound.type";
import {
  getLostFoundParam,
  getLostFoundsFoundTypeParam,
  getLostFoundsLostTypeParam,
  postLostfoundCommentParam,
} from "./lostFound.param";

class LostFoundRepository {
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

  public async postLostfoundComment({
    comment,
    lostFoundId,
  }: postLostfoundCommentParam): Promise<void> {
    await customAxios.post(`/lostfound/comment`, {
      comment,
      lostFoundId,
    });
  }
}

export default new LostFoundRepository();
