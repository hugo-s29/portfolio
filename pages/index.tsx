import Hero from "../components/hero";
import { Main, Section } from "../components/layout";
import { Title } from "../components/typography";
import Project, { IPos } from "../components/project";
import { useOvermind } from "../overmind";
import { useRef } from "react";

function Home() {
  const { state } = useOvermind();
  const projectSection = useRef<HTMLElement>(null);
  return (
    <Main>
      <Hero title="Hugo Salou" goTo={projectSection} subtitle="<dev />" />
      <Section ref={projectSection} pad="2rem 0 2rem 0">
        <Title>{state.language.sections.home}</Title>
        {state.language.projects.map(({ id, name, link }, i) => (
          <Project
            key={id}
            name={name}
            link={link}
            image={`/img/p/${id}.png`}
            pos={i % 2 === 0 ? IPos.LEFT : IPos.RIGHT}
          />
        ))}
      </Section>
    </Main>
  );
}

export default Home;
