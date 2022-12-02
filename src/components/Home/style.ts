import styled from "styled-components";
import { skeletonAnimtaion } from "../../styles/libStyle";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  row-gap: 20px;
`;

export const HomeWrap = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeLoadingItem = styled.div`
  width: 216px;
  height: 276px;
  border-radius: 5px;
  box-sizing: border-box;

  ${skeletonAnimtaion}
`;
