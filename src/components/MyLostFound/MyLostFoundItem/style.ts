import styled from "styled-components";

export const MyLostFoundItemContainer = styled.div`
  width: 100%;
  min-height: 146px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const MyLostFoundItemImg = styled.img`
  width: 295px;
  height: 100%;
  object-fit: cover;
`;
