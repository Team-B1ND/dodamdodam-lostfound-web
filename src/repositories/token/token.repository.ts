import { TokenRefreshResponse } from "../../types/token/token.type";
import { postTokenRefreshParam } from "./token.param";

export interface TokenRepository {
  postTokenRefresh({
    refreshToken,
  }: postTokenRefreshParam): Promise<TokenRefreshResponse>;
}
