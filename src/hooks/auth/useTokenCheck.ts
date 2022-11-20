import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../../lib/token";

const useTokenCheck = () => {
  useEffect(() => {
    if (
      !token.getToken(ACCESS_TOKEN_KEY) ||
      !token.getToken(REFRESH_TOKEN_KEY)
    ) {
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }, []);

  return {};
};

export default useTokenCheck;
