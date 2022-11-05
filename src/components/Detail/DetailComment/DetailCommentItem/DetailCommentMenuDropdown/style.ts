import styled from "styled-components";
import { palette } from "../../../../../styles/palettes";

export const DetailCommentMenuDropdownContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DetailCommentMenuDropdownIcon = styled.div`
  color: ${palette.gray[300]};
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailCommentMenuDropdownItemWrap = styled.div`
  width: 115px;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderColor};
  top: 40px;
  left: 16px;
`;

export const DetailCommentMenuDropdownItem = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.contrast};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor2};

  &:last-child {
    border-bottom: 0px;
  }

  &:hover {
    filter: brightness(95%);
  }
`;
