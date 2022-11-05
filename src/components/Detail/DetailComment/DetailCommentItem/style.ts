import styled from "styled-components";

export const DetailCommentItemContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
`;

export const DetailCommentItemProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
`;

export const DetailCommentItemProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

export const DetailCommentItemProfileName = styled.span`
  color: ${({ theme }) => theme.contrast};
  font-size: 14px;
`;

export const DetailCommentItemText = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.contrast};
  padding-top: 20px;
`;

export const DetailCommentMenuWrap = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  margin-left: auto;

  ${DetailCommentItemContainer}:hover & {
    display: block;
  }
`;
