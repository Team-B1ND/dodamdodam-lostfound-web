import styled, { css } from "styled-components";
import { palette } from "../../../styles/palettes";

export const WriteFormInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

export const WriteFormRowInputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const WriteFormInputTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.contrast};
`;

export const WriteFormImgInputLabel = styled.label`
  width: 100%;
  height: 500px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
`;

export const WriteFormImgInputLabelIcon = styled.div`
  width: 80px;
  height: 80px;
  font-size: 80px;
  color: ${palette.gray[300]};
`;

export const WriteFormImgInputLabelText = styled.span`
  font-size: 20px;
  color: ${palette.gray[300]};
`;

export const WriteFormImgWrap = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;

export const WriteFormImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const WriteFormTextInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 18px;
  padding: 0px 10px;
  box-sizing: border-box;
  outline: none;
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.contrast};
`;

export const WriteFormTextarea = styled.textarea`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 18px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.contrast};
`;

export const WriteFormSelectWrap = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 18px;
  padding: 0px 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.contrast};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const WriteFormSelectIcon = styled.div<{ close: boolean }>`
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

export const WriteFormSelectItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0px;
  top: 60px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const WriteFormSelectItem = styled.div`
  width: 100%;
  height: 50px;
  background: transparent;
  color: ${({ theme }) => theme.contrast};
  cursor: pointer;
  padding: 0px 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor2};

  &:hover {
    filter: brightness(95%);
  }
`;

export const WriteFormSubmitButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  border: 0px;
  outline: none;
  background-color: ${palette.sub};
  margin-left: auto;
  cursor: pointer;
`;
