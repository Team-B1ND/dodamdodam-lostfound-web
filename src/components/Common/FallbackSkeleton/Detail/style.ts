import styled from "styled-components";
import { skeletonAnimtaion } from "../../../../styles/libStyle";

export const DetailLoadingImg = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  object-fit: cover;

  ${skeletonAnimtaion};
`;

export const DetailLoadingAbleWrap = styled.div<{ isTall?: boolean }>`
  width: 100%;
  height: ${(props) => (props.isTall ? "89px" : "189px")};
  border-radius: 8px;

  ${skeletonAnimtaion};
`;
