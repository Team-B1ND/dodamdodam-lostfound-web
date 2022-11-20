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
  height: 100%;
  display: flex;
  align-items: center;
`;

export const PageTemplateContentWrap = styled.div`
  width: 966px;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 0;
  padding: 30px 0px;
  box-sizing: border-box;
  overflow-y: scroll;
`;
