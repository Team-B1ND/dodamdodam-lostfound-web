import styled from "styled-components";

export const NavBarContainer = styled.div`
  min-width: 320px;
  height: 95%;
  background-color: ${({ theme }) => theme.backgroundColor2};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 1;
  border-radius: 5px;
  padding: 40px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBarProfile = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  margin-top: 20px;
  margin-top: 38px;
`;

export const NavBarName = styled.h1`
  font-size: 22px;
  color: black;
  margin-top: 15px;
  color: ${({ theme }) => theme.contrast};
`;
