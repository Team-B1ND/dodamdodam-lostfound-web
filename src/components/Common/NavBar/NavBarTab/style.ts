import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palettes";

export const NavBarTabContaienr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 60px;
`;

export const NavBarTabItem = styled.div<{ isSelect: boolean }>`
  width: 100%;
  height: 45px;
  cursor: pointer;
  font-size: 20px;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  ${({ isSelect }) =>
    isSelect
      ? css`
          background-color: ${palette.main};
          color: white;
          border-radius: 20px;
        `
      : css`
          color: ${palette.gray[300]};
        `}
`;
