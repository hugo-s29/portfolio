import { NextPage } from "next";
import {
  Main,
  Title,
  Section,
  IColor,
  Image,
  Project,
  Light,
} from "../components";
import styled from "styled-components";
import Projects from "../data/projects";
// import { Power3, TimelineMax } from "gsap";
// import { useEffect, useRef } from "react";

const HTitle = styled(Title)`
  position: absolute;
  top: calc(100vh - 18rem - 1rem);
  font-size: 8rem;
  left: 2rem;
  z-index: 2;
`;

const Home: NextPage<{}> = () => {
  /*useEffect(
    () =>
      void (async () => {
        const ScrollMagic = await import("scrollmagic");
        const controller = new ScrollMagic.Controller();

        const tween = new TimelineMax();

        tween.fromTo(
          Hide1.current || {},
          1.25, // Length of animation
          {
            opacity: 1,
          },
          {
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.3,
          }
        );

        // ScrollMagic Scroll Scene
        new ScrollMagic.Scene({
          triggerElement: HomeSection.current,
          duration: 1000,
          triggerHook: 0,
        })
          .setTween(tween)
          .addIndicators()
          .addTo(controller);
      })(),
    []
  );*/
  return (
    <Main>
      <Section bg="/images/background.png" img color={IColor.DARK}>
        <HTitle>
          Hugo
          <br />
          SALOU
        </HTitle>
      </Section>
      <Section color={IColor.LIGHT}>
        <Title>Projets</Title>
        {Projects.map((p) => (
          <Project key={p.id} href={`/p/${p.id}`}>
            <Light>{p.title}</Light>
            {p.images_count > 0 && <Image src={`/images/p/${p.id}/0.png`} />}
          </Project>
        ))}
      </Section>
    </Main>
  );
};

export default Home;
