import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    contrast: string;
    backgroundColor: string;
    backgroundColor2: string;
    backgroundColor3: string;
    borderColor: string;
    darkmodeButtonColor: string;
  }
}
