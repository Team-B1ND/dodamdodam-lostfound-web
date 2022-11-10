import {
  MyLostFoundItemMenuDropdownContainer,
  MyLostFoundItemMenuDropdownIcon,
  MyLostFoundItemMenuDropdownItem,
  MyLostFoundItemMenuDropdownItemWrap,
} from "./style";
import { HiDotsVertical } from "@react-icons/all-files/hi/HiDotsVertical";
import { memo, useRef, useState } from "react";
import useOutsideClick from "../../../../hooks/common/useOutsideClick";
import { useDeleteLostFound } from "../../../../quries/lostFound/lostFound.query";
import { useQueryClient } from "react-query";

interface Props {
  lostFoundId: number;
  onModify: () => void;
}

const MyLostFoundItemMenuDropdown = ({
  lostFoundId,
  onModify,
}: Props) => {
  const [close, setClose] = useState(true);
  const menuDropdownContainer = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: menuDropdownContainer, setState: setClose });

  const queryClient = useQueryClient();

  const deleteLostFoundMutation = useDeleteLostFound();

  const onDeleteMutation = () => {
    deleteLostFoundMutation.mutateAsync(
      { id: lostFoundId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("lostFound/getMyLostFounds");
          window.alert("분실물 삭제 성공");
        },
        onError: () => {
          window.alert("분실물 삭제 실패");
        },
      }
    );
  };

  return (
    <MyLostFoundItemMenuDropdownContainer
      onClick={() => setClose((prev) => !prev)}
      ref={menuDropdownContainer}
    >
      <MyLostFoundItemMenuDropdownIcon>
        <HiDotsVertical />
      </MyLostFoundItemMenuDropdownIcon>
      {!close && (
        <MyLostFoundItemMenuDropdownItemWrap>
          <MyLostFoundItemMenuDropdownItem onClick={onModify}>
            수정
          </MyLostFoundItemMenuDropdownItem>
          <MyLostFoundItemMenuDropdownItem onClick={onDeleteMutation}>
            삭제
          </MyLostFoundItemMenuDropdownItem>
        </MyLostFoundItemMenuDropdownItemWrap>
      )}
    </MyLostFoundItemMenuDropdownContainer>
  );
};

export default memo(MyLostFoundItemMenuDropdown);
