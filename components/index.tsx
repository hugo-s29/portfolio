import styled, { createGlobalStyle, css } from "styled-components";
import { SFC } from "react";
import Head from "next/head";

export const Main = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 1000px;
`;

export enum IColor {
  DARK = "dark",
  LIGHT = "light",
}

export interface ISectionProps {
  bg?: string;
  img?: boolean;
  color?: IColor;
}

export const Section = styled.section<ISectionProps>`
  min-height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
  ${(p) =>
    p.bg &&
    (p.img
      ? css`
          background: url(${p.bg});
          background-size: cover;
          }
        `
      : css`
          background: ${p.bg};
        `)}

  ${(p) =>
    p.color === IColor.DARK
      ? css`
          color: whitesmoke;
        `
      : p.color === IColor.LIGHT
      ? css`
          color: black;
        `
      : css`
          color: grey;
        `}
`;

export const Button = styled.button``;

export const Project = styled.a`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  margin: 60px;
  width: 100%;
  max-width: 1000px;
`;

export const Title = styled.h1`
  font-family: "Limelight", cursive;
  font-weight: 400;
  font-size: 4rem;
`;

export const Light = styled.h2`
  font-family: "Poiret One", cursive;
`;

export const Link = styled.a``;

export const Nav = styled.nav``;

export const Header = styled.header``;

export const Footer = styled.footer``;

export const Image = styled.img``;

export const Hide = styled.span``;

export interface ISEOProps {
  title: string;
}

export const SEO: SFC<ISEOProps> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    font-size: 16pt;
    font-family: Comfortaa, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #__next {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;
