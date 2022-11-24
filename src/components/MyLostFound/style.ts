import styled from "styled-components";
import { skeletonAnimtaion } from "../../styles/libStyle";
import { palette } from "../../styles/palettes";

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

export const MyLostFoundEmptyWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${palette.gray[300]};
  row-gap: 10px;
  font-size: 18px;
`;

export const MyLostFoundEmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  font-size: 80px;
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette.gray[300]};
`;

export const MyLostFoundLoadingItem = styled.div`
  width: 100%;
  min-height: 146px;
  max-height: 146px;
  border-radius: 5px;

  ${skeletonAnimtaion}
`;
