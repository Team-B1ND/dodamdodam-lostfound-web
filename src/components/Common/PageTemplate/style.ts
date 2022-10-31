import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: relative;
`;

export const PageTemplateWrap = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const PageTemplateContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 0;
  background-color: ${({ theme }) => theme.backgroundColor2};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 22px 0px;
  box-sizing: border-box;
`;
