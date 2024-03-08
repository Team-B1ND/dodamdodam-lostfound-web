import { atom } from "recoil";

export const writeUploadLostFoundImageAtom = atom<string | null>({
  key: "write/writeUploadLostFoundImageAtom",
  default: null,
});
