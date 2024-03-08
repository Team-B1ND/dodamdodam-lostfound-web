import { useState } from "react";
import { useRecoilState } from "recoil";
import { HOME_LOSTFOUND_DROPDOWN_ITEMS } from "../../../constants/home/home.constant";
import { homeLostFoundTypeAtom } from "../../../stores/home/home.store";
import { LostFoundType } from "../../../types/lostfound/lostfound.type";
import dataTransform from "../../../utils/transform/dataTransform";
import {
  HomeDropdownContainer,
  HomeDropdownIcon,
  HomeDropdownItem,
  HomeDropdownItemWrap,
} from "./style";
import { VscTriangleDown } from "@react-icons/all-files/vsc/VscTriangleDown";
import { usePostModuleLog } from "../../../quries/log/log.query";

const HomeDropdown = () => {
  const [lostFoundType, setLostFoundType] = useRecoilState(
    homeLostFoundTypeAtom
  );

  const [close, setClose] = useState(true);

  const postModuleLogMutation = usePostModuleLog();

  const onChangeLostFoundType = (type: LostFoundType) => {
    if (type === "FOUND") {
      postModuleLogMutation.mutate({
        description: `분실물 페이지 습득물 조회`,
        moduleName: "분실물 조회",
      });
    } else {
      postModuleLogMutation.mutate({
        description: `분실물 페이지 분실물 조회`,
        moduleName: "습득물 조회",
      });
    }

    setLostFoundType(type);
  };

  return (
    <HomeDropdownContainer onClick={() => setClose((prev) => !prev)}>
      {dataTransform.lostFoundTypeTransform(lostFoundType)}
      <HomeDropdownIcon close={close}>
        <VscTriangleDown />
      </HomeDropdownIcon>
      {!close && (
        <HomeDropdownItemWrap>
          {HOME_LOSTFOUND_DROPDOWN_ITEMS.map((item) => (
            <HomeDropdownItem
              key={item}
              onClick={() => onChangeLostFoundType(item)}
            >
              {dataTransform.lostFoundTypeTransform(item)}
            </HomeDropdownItem>
          ))}
        </HomeDropdownItemWrap>
      )}
    </HomeDropdownContainer>
  );
};

export default HomeDropdown;
