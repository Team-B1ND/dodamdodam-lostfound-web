import styled from "styled-components";

export const WriteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const WriteWrap = styled.div`
  width: 677px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 20px;

  input[type="file"] {
    display: none;
  }
`;
