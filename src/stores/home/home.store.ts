import { atom } from "recoil";
import { LostFoundType } from "../../types/lostfound/lostfound.type";

export const homeLostFoundTypeAtom = atom<LostFoundType>({
  key: "home/homeLostFoundTypeAtom",
  default: "LOST",
});
