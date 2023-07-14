import {
  MyLostFoundItemMenuDropdownContainer,
  MyLostFoundItemMenuDropdownIcon,
  MyLostFoundItemMenuDropdownItem,
  MyLostFoundItemMenuDropdownItemWrap,
} from "./style";
import { HiDotsVertical } from "@react-icons/all-files/hi/HiDotsVertical";
import { memo, useRef, useState } from "react";
import useOutsideClick from "../../../../hooks/common/useOutsideClick";
import { useNavigate } from "react-router-dom";

interface Props {
  lostFoundId: number;
  lostFoundType: string;
  onDeleteLostFound: (lostFoundId: number, lostFoundType: string) => void;
}

const MyLostFoundItemMenuDropdown = ({
  lostFoundId,
  lostFoundType,
  onDeleteLostFound,
}: Props) => {
  const [close, setClose] = useState(true);
  const menuDropdownContainer = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  useOutsideClick({ ref: menuDropdownContainer, setState: setClose });

  return (
    <MyLostFoundItemMenuDropdownContainer
      onClick={(e) => {
        e.stopPropagation();
        setClose((prev) => !prev);
      }}
      ref={menuDropdownContainer}
    >
      <MyLostFoundItemMenuDropdownIcon>
        <HiDotsVertical />
      </MyLostFoundItemMenuDropdownIcon>
      {!close && (
        <MyLostFoundItemMenuDropdownItemWrap>
          <MyLostFoundItemMenuDropdownItem
            onClick={() => navigate(`/write/${lostFoundId}`)}
          >
            수정
          </MyLostFoundItemMenuDropdownItem>
          <MyLostFoundItemMenuDropdownItem
            onClick={() => onDeleteLostFound(lostFoundId, lostFoundType)}
          >
            삭제
          </MyLostFoundItemMenuDropdownItem>
        </MyLostFoundItemMenuDropdownItemWrap>
      )}
    </MyLostFoundItemMenuDropdownContainer>
  );
};

export default memo(MyLostFoundItemMenuDropdown);
