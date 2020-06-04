import Hero from "../components/hero";
import { Main, Section } from "../components/layout";
import { Title } from "../components/typography";
import Project, { IPos } from "../components/project";
import { useOvermind } from "../overmind";
import { useRef } from "react";
import { NextSeo, SocialProfileJsonLd } from "next-seo";

function Home() {
  const { state } = useOvermind();
  const projectSection = useRef<HTMLElement>(null);
  return (
    <Main>
      <NextSeo
        title="Accueil - Hugo SALOU"
        description={state.language.seo.description}
        openGraph={{
          site_name: "Hugo SALOU",
          title: state.language.seo.page_names.home,
          url: "https://hugos29.now.sh/",
          description: state.language.seo.description,
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Hugo SALOU"
        url="https://hugos29.now.sh/"
        sameAs={[
          "https://twitter.com/_hugos29",
          "https://twitter.com/hugo_salou",
        ]}
      />
      <Hero title="Hugo Salou" goTo={projectSection} subtitle="<dev />" />
      <Section ref={projectSection} pad="2rem 0 2rem 0">
        <Title>{state.language.sections.home}</Title>
        {state.language.projects.map(({ id, name, link }, i) => (
          <Project
            key={id}
            name={name}
            link={link}
            image={id}
            pos={i % 2 === 0 ? IPos.LEFT : IPos.RIGHT}
          />
        ))}
      </Section>
    </Main>
  );
}

export default Home;
