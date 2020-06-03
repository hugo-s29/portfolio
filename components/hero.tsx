import React, { SFC, RefObject } from "react";
import Particles, { IParticlesParams } from "react-tsparticles";
import styled from "styled-components";
import { Title, SubTitle } from "./typography";
import { Section } from "./layout";
import { useOvermind } from "../overmind";
import { dark, light } from "./theme";
import { FaAngleDown } from "react-icons/fa";

const HeroTitle = styled(Title)`
  font-size: 4rem;
  font-weight: 200;
  margin: 2rem;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const HeroSubTitle = styled(SubTitle)`
  font-size: 2rem;
  font-weight: 300;
  margin: 2rem;
`;

const SParticles = styled(Particles)`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  transition-duration: 0 !important;
  right: 0;
  bottom: 0;
`;
const ScrollIcon = styled(FaAngleDown)`
  position: absolute;
  bottom: 2rem;
  border-radius: 50%;
  background: ${(p) => p.theme.sec};
  color: ${(p) => p.theme.bg};
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
`;

const Hero: SFC<{
  title: string;
  goTo?: RefObject<HTMLElement>;
  subtitle?: string;
}> = ({ title, goTo, subtitle }) => {
  const { state } = useOvermind();
  const color = (state.dark ? dark : light).sec;
  const config: IParticlesParams = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: color,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: 2,
      },
      line_linked: {
        enable: true,
        distance: 120,
        color,
        opacity: 0.4,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 2,
        bounce: true,
      },
    },
    interactivity: {
      events: {
        resize: true,
      },
    },
    retina_detect: true,
  };
  return (
    <Section fullWidth centerElements>
      {state.loaded && <SParticles params={config} />}
      <HeroTitle as="h1">{title}</HeroTitle>
      {subtitle && <HeroSubTitle as="h2">{subtitle}</HeroSubTitle>}
      {goTo && (
        <ScrollIcon
          onClick={() =>
            goTo.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
        />
      )}
    </Section>
  );
};

export default Hero;
