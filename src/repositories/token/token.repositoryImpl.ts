import axios from "axios";
import { TokenRefreshResponse } from "../../types/token/token.type";
import { postTokenRefreshParam } from "./token.param";
import config from "../../config/config.json";
import { TokenRepository } from "./token.repository";

class TokenRepositoryImpl implements TokenRepository {
  public async postTokenRefresh({
    refreshToken,
  }: postTokenRefreshParam): Promise<TokenRefreshResponse> {
    const { data } = await axios.post(
      `${config.SERVER}/token/refresh`,
      refreshToken
    );

    return data;
  }
}

export default new TokenRepositoryImpl();
