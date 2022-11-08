import {
  DetailCommentMenuDropdownContainer,
  DetailCommentMenuDropdownIcon,
  DetailCommentMenuDropdownItem,
  DetailCommentMenuDropdownItemWrap,
} from "./style";
import { HiDotsVertical } from "@react-icons/all-files/hi/HiDotsVertical";
import { Dispatch, memo, SetStateAction, useRef, useState } from "react";
import useOutsideClick from "../../../../../hooks/common/useOutsideClick";

interface Props {
  commentId: number;
  setIsModify: Dispatch<SetStateAction<boolean>>;
  onDeleteComment: (commentId: number) => void;
}

const DetailCommentMenuDropdown = ({
  commentId,
  setIsModify,
  onDeleteComment,
}: Props) => {
  const [close, setClose] = useState(true);
  const menuDropdownContainer = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: menuDropdownContainer, setState: setClose });

  return (
    <DetailCommentMenuDropdownContainer
      onClick={() => setClose((prev) => !prev)}
      ref={menuDropdownContainer}
    >
      <DetailCommentMenuDropdownIcon>
        <HiDotsVertical />
      </DetailCommentMenuDropdownIcon>
      {!close && (
        <DetailCommentMenuDropdownItemWrap>
          <DetailCommentMenuDropdownItem onClick={() => setIsModify(true)}>
            수정
          </DetailCommentMenuDropdownItem>
          <DetailCommentMenuDropdownItem
            onClick={() => onDeleteComment(commentId)}
          >
            삭제
          </DetailCommentMenuDropdownItem>
        </DetailCommentMenuDropdownItemWrap>
      )}
    </DetailCommentMenuDropdownContainer>
  );
};

export default memo(DetailCommentMenuDropdown);
