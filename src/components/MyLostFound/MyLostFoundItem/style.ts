import styled from "styled-components";
import { palette } from "../../../styles/palettes";

export const MyLostFoundItemContainer = styled.div`
  width: 100%;
  min-height: 146px;
  max-height: 146px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  cursor: pointer;
`;

export const MyLostFoundItemImg = styled.img`
  min-width: 295px;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
`;

export const MyLostFoundItemMiddleWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
`;

export const MyLostFoundItemInfoWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MyLostFoundItemTitle = styled.h1`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const MyLostFoundItemPlace = styled.p`
  color: ${palette.gray[300]};
  font-size: 14px;
`;

export const MyLostFoundItemCreatedAt = styled.p`
  font-size: 14px;
  color: ${palette.gray[300]};
  margin-top: 8px;
`;

export const MyLostFoundItemTag = styled.div<{ backgroundColor: string }>`
  width: 70px;
  height: 24px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
