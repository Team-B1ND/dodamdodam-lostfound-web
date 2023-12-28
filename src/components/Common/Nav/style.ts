import styled from "styled-components";
import { palette } from "../../../styles/palettes";

export const NavContainer = styled.div`
  min-width: 340px;
  height: 100%;
  z-index: 1;
  padding: 40px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-top: 0px;
  border-bottom: 0px;
`;

export const NavLogo = styled.img`
  height: 34px;
  object-fit: scale-down;
  margin-bottom: 20px;
  margin-right: auto;
`;

export const NavProfileWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${palette.sub};
  border-radius: 25px;
`;

export const NavProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
`;

export const NavName = styled.h1`
  font-size: 18px;
  color: white;
  margin-top: 15px;
  font-weight: bold;
`;

export const NavClassroom = styled.p`
  font-size: 16px;
  margin-top: 8px;
  color: white;
`;
