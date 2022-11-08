import styled from "styled-components";
import { ellipsisLine } from "../../../styles/libStyle";
import { palette } from "../../../styles/palettes";

export const HomeItemContainer = styled.div`
  width: 216px;
  height: 276px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const HomeItemImg = styled.img`
  width: 100%;
  min-height: 194px;
  max-height: 194px;
  object-fit: cover;
`;

export const HomeItemContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomeItemTitle = styled.h1`
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
  ${ellipsisLine(1)}
`;

export const HomeItemContentBottomWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeItemContentAuthor = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.contrast};
`;

export const HomeItemContentCreatedAt = styled.span`
  font-size: 12px;
  color: ${palette.gray[300]};
`;
