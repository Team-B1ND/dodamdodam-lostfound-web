import styled from "styled-components";
import { palette } from "../../../../styles/palettes";

export const DetailCommentItemContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
`;

export const DetailCommentItemProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
`;

export const DetailCommentItemProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

export const DetailCommentItemTextWrap = styled.div`
  width: 100%;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  padding-top: 5px;
`;

export const DetailCommentItemProfileName = styled.span`
  color: ${({ theme }) => theme.contrast};
  font-size: 14px;
`;

export const DetailCommentItemText = styled.p`
  width: 100%;
  font-size: 17px;
  color: ${({ theme }) => theme.contrast};
`;

export const DetailCommentItemInputForm = styled.form`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  position: relative;
  overflow: hidden;
`;

export const DetailCommentItemInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 17px;
  color: ${({ theme }) => theme.contrast};
  padding: 0px 10px;
  background: transparent;
  border: 0px;
`;

export const DetailCommentItemInputCloseButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: ${palette.gray[300]};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;

export const DetailCommentMenuWrap = styled.div`
  width: 20px;
  height: 40px;
  display: none;

  ${DetailCommentItemContainer}:hover & {
    display: block;
  }
`;
