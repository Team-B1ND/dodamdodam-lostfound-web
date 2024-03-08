import styled from "styled-components";
import { palette } from "../../../../styles/palettes";

export const MyLostFoundItemMenuDropdownContainer = styled.div`
  width: 20px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
`;

export const MyLostFoundItemMenuDropdownIcon = styled.div`
  color: ${palette.gray[300]};
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyLostFoundItemMenuDropdownItemWrap = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderColor};
  top: 40px;
  left: -60px;
`;

export const MyLostFoundItemMenuDropdownItem = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;
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
