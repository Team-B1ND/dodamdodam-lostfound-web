import styled from "styled-components";
import { skeletonAnimtaion } from "../../../../styles/libStyle";

export const DetailLoadingImg = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  object-fit: cover;

  ${skeletonAnimtaion};
`;

export const DetailLoadingAbleWrap = styled.div<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => height || "189px"};
  border-radius: 8px;

  ${skeletonAnimtaion};
`;
