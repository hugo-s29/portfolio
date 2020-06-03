import styled, { createGlobalStyle, css } from "styled-components";
export interface ISectionProps {
  fullWidth?: boolean;
  pad?: string;
  centerElements?: boolean;
}
export const Section = styled.section<ISectionProps>`
  ${(p) =>
    p.pad &&
    css`
      margin: ${p.pad};
      padding: ${p.pad};
    `}
  position: relative;
  display: flex;
  ${(p) =>
    !p.centerElements
      ? css`
          justify-content: space-evenly;
        `
      : css`
          justify-content: center;
        `}
  align-items: center;
  flex-direction: column;
  transition-duration: 0 !important;
  min-height: 100vh;
  ${(p) =>
    !p.fullWidth
      ? css`
          width: 100%;
          max-width: 1500px;
        `
      : css`
          width: 100vw;
        `}
`;
export const Main = styled.main`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition-duration: 0 !important;
`;

export const Style = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition-duration: 1s;
}

:root {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16pt;
    width: 100vw;
    overflow-x: hidden;
    background-color: ${(p) => p.theme.bg};
}

#__next{
    width: 100vw;
}

`;
