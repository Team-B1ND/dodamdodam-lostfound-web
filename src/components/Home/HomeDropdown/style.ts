import styled from "styled-components";

export const HomeDropdownContainer = styled.button`
  width: 120px;
  height: 46px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.contrast};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
