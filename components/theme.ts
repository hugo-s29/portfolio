import { DefaultTheme } from "styled-components";
import colors from "./colors";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    bg: string;
    sec: string;
    colors: typeof colors;
    name: "DARK" | "LIGHT";
  }
}

const { b1, b2, w1, w2 } = colors;
export const light: DefaultTheme = {
  main: b1,
  bg: w1,
  sec: b2,
  colors,
  name: "LIGHT",
};
export const dark: DefaultTheme = {
  main: w1,
  bg: b1,
  sec: w2,
  colors,
  name: "DARK",
};
