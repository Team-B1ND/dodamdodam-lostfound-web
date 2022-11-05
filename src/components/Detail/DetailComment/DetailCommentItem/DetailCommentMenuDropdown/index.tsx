import {
  DetailCommentMenuDropdownContainer,
  DetailCommentMenuDropdownIcon,
  DetailCommentMenuDropdownItem,
  DetailCommentMenuDropdownItemWrap,
} from "./style";
import { HiDotsVertical } from "@react-icons/all-files/hi/HiDotsVertical";
import { useRef, useState } from "react";
import useOutsideClick from "../../../../../hooks/common/useOutsideClick";

const DetailCommentMenuDropdown = () => {
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
          <DetailCommentMenuDropdownItem onClick={() => console.log("asds")}>
            수정
          </DetailCommentMenuDropdownItem>
          <DetailCommentMenuDropdownItem onClick={() => console.log("asds")}>
            삭제
          </DetailCommentMenuDropdownItem>
        </DetailCommentMenuDropdownItemWrap>
      )}
    </DetailCommentMenuDropdownContainer>
  );
};

export default DetailCommentMenuDropdown;
