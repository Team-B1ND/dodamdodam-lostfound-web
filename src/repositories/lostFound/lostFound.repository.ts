import customAxios from "../../lib/axios";
import { LostFoundsResponse } from "../../types/lostfound/lostfound.type";
import {
  getLostFoundsFoundTypeParam,
  getLostFoundsLostTypeParam,
} from "./lostFound.param";

class LostFoundRepository {
  public async getLostFoundsLostType({
    page,
  }: getLostFoundsLostTypeParam): Promise<LostFoundsResponse> {
    const { data } = await customAxios.get(
      `/lostfound?limit=${15}&page=${page}&type=LOST`
    );

    return { ...data, nextPage: page + 1 };
  }

  public async getLostFoundsFoundType({
    page,
  }: getLostFoundsFoundTypeParam): Promise<LostFoundsResponse> {
    const { data } = await customAxios.get(
      `/lostfound?limit=${15}&page=${page}&type=LOST`
    );

    return { ...data, nextPage: page + 1 };
  }
}

export default new LostFoundRepository();
