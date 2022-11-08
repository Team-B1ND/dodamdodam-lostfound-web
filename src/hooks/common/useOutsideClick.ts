import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface Params {
  ref: RefObject<any>;
  setState: Dispatch<SetStateAction<boolean>>;
}

const useOutsideClick = ({ ref, setState }: Params) => {
  const handleClickOutside = (e: Event) => {
    if (ref && !ref?.current?.contains(e.target as Node)) {
      setState(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  });
};

export default useOutsideClick;
