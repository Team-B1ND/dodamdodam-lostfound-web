import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const LostFoundSkeletonItem = styled.div`
  width: 100%;
  min-height: 146px;
  max-height: 146px;
  border-radius: 5px;

  ${skeletonAnimtaion}
`;
