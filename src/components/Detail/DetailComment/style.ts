import styled from "styled-components";

export const DetailCommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
`;

export const DetailCommentForm = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  column-gap: 12px;
`;

export const DetailCommentInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor3};
  border: 0px;
  font-size: 16px;
  padding: 0px 35px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;
  color: ${({ theme }) => theme.contrast};
`;

export const DetailCommentButton = styled.button`
  width: 90px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.contrast};
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  background-color: ${({ theme }) => theme.backgroundColor3};
  color: ${({ theme }) => theme.contrast};

  :hover {
    filter: brightness(95%);
  }
`;

export const DetailCommentWrap = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding-bottom: 40px;
`;
