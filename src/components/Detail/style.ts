import styled from "styled-components";
import { ellipsisLine } from "../../styles/libStyle";
import { palette } from "../../styles/palettes";

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const DetailWrap = styled.div<{ isLoading?: boolean }>`
  width: 677px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.isLoading && "10px"};
`;

export const DetailImg = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  object-fit: cover;
`;

export const DetailProfileWrap = styled.div`
  width: 100%;
  padding-top: 23px;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const DetailProfileInfoWrap = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const DetailProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const DetailProfileTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailProfileName = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.contrast};
`;

export const DetailPlaceWrap = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const DetailPlaceText = styled.p`
  width: 355px;
  ${ellipsisLine(1)}
  font-size: 15px;
  color: ${({ theme }) => theme.contrast};
  text-align: end;
`;

export const DetailPlaceIcon = styled.div`
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const DetailContentTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
  font-weight: 600;
  line-height: 30px;
`;

export const DetailContentCreatedAt = styled.p`
  font-size: 13px;
  color: ${palette.gray[300]};
  line-height: 19px;
  margin-top: 4px;
`;

export const DetailContent = styled.pre`
  width: 100%;
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.contrast};
  margin: 16px 0px;
  white-space: pre-wrap;
`;

export const DetailBottomWrap = styled.div`
  display: flex;
  justify-content: start;
`;

export const DetailBottomText = styled.p`
  color: ${palette.gray[300]};
  font-size: 13px;
  line-height: 19px;
`;
