import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`

    ${reset}

    @keyframes skeleton {
    0% {
      background-color: rgba(182, 182, 182, 0.1);
    }
    50% {
      background-color: rgba(182, 182, 182, 0.25);
    }
    100% {
      background-color: rgba(182, 182, 182, 0.1);
    }
  }
`;
