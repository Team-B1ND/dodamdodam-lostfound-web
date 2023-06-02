import styled from "styled-components";

export const NoFound = styled.h1`
  font-size: 25px;
  text-align: center;
  margin: 50px auto;
`;

export const RetryBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RetryBtn = styled.button`
  width: 120px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.contrast};
  box-sizing: border-box;
  font-size: 16px;
  background-color: ${({ theme }) => theme.backgroundColor3};
  color: ${({ theme }) => theme.contrast};

  :hover {
    filter: brightness(95%);
  }
`;
