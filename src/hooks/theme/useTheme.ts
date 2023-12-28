import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { THEME_KEY } from "../../constants/theme/theme.constant";
import { ETheme } from "../../enums/theme/theme.enum";
import { themeModeAtom } from "../../stores/theme/theme.store";
import { darkTheme, lightTheme } from "../../styles/theme";

const useTheme = () => {
  const [theme, setTheme] = useRecoilState<ETheme>(themeModeAtom);

  const { LIGHT, DARK } = ETheme;

  const toggleTheme = () => {
    const switchTheme = theme === LIGHT ? DARK : LIGHT;
    localStorage.setItem(THEME_KEY, switchTheme);
    setTheme(switchTheme);
  };

  const styledTheme = useMemo(
    () => (theme === LIGHT ? lightTheme : darkTheme),
    [LIGHT, theme]
  );

  const enumTheme: ETheme = useMemo(
    () => (theme === LIGHT ? LIGHT : DARK),
    [DARK, LIGHT, theme]
  );

  return {
    toggleTheme,
    styledTheme,
    enumTheme,
  };
};

export default useTheme;
