import styled, { css } from "styled-components";
import React, { SFC } from "react";
import { SubTitle } from "./typography";

export enum IPos {
  LEFT,
  RIGHT,
}

export interface IProjectProps {
  name: string;
  image: string;
  link: string;
  pos: IPos;
}

const Container = styled.a<{ pos: IPos }>`
  text-decoration: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: ${(p) => (p.pos !== IPos.LEFT ? "flex-start" : "flex-end")};
  @media screen and (max-width: 750px) {
    padding: 10%;
    align-self: center;
    flex-direction: ${(p) =>
      p.pos !== IPos.LEFT ? "column" : "column-reverse"};
  }
`;
const Image = styled.img`
  width: 20%;
  margin: 3rem;
  ${(p) =>
    p.theme.name === "DARK" &&
    css`
      filter: drop-shadow(0 0 30px ${(p) => p.theme.sec});
    `}
  @media screen and (max-width: 750px) {
    width: 50%;
  }
`;
const Title = styled(SubTitle)`
  @media screen and (max-width: 750px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Project: SFC<IProjectProps> = ({ name, image, link, pos }) => (
  <Container href={link} pos={pos}>
    {pos === IPos.LEFT ? (
      <>
        <Title>{name}</Title>
        <Image src={image} />
      </>
    ) : (
      <>
        <Image src={image} />
        <Title>{name}</Title>
      </>
    )}
  </Container>
);

export default Project;
