import { atom } from "recoil";
import { ETheme } from "../../enums/theme/theme.enum";
import { getTheme } from "../../utils/theme/getTheme";

export const themeModeAtom = atom<ETheme>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});
