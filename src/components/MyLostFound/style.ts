import styled from "styled-components";
import { skeletonAnimtaion } from "../../styles/libStyle";

export const MyLostFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0px 20px;
  box-sizing: border-box;
  padding-top: 54px;
  overflow-y: scroll;
`;

export const MyLostFoundLoadingItem = styled.div`
  width: 100%;
  min-height: 146px;
  max-height: 146px;
  border-radius: 5px;

  ${skeletonAnimtaion}
`;
