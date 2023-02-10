import styled from "styled-components";
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

  &::-webkit-scrollbar {
    display: none;
  }
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