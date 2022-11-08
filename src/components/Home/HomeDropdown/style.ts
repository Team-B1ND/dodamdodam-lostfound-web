import styled, { css } from "styled-components";
import { palette } from "../../../styles/palettes";

export const HomeDropdownContainer = styled.button`
  width: 120px;
  min-height: 46px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.contrast};
  position: relative;
  border: 1px solid ${({ theme }) => theme.borderColor};
  margin-right: 22px;
  margin-left: auto;
  font-size: 18px;
  cursor: pointer;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HomeDropdownIcon = styled.div<{ close: boolean }>`
  height: 18px;
  font-size: 18px;
  color: ${palette.gray[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${({ close }) =>
    close
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(180deg);
        `}
`;

export const HomeDropdownItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 1px solid ${({ theme }) => theme.borderColor};
  top: 56px;
  left: 0px;
  position: absolute;
  z-index: 2;
  border-radius: 5px;
  overflow: hidden;
`;

export const HomeDropdownItem = styled.div`
  width: 100%;
  height: 46px;
  padding: 0px 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor2};

  :hover {
    filter: brightness(90%);
  }
`;
