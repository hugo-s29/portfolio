import Hero from "../../components/hero";
import { Main, Section } from "../../components/layout";
import { useOvermind } from "../../overmind";
import { useRef } from "react";
import CodeWrapper from "../../data/code";
import { useRouter } from "next/dist/client/router";
import Error from "next/error";
import { wip } from "../../data";
// import { NextSeo, SocialProfileJsonLd } from "next-seo";

function Home() {
  const { query } = useRouter();
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const { state } = useOvermind();
  const projectSection = useRef<HTMLElement>(null);

  if (!state.language.projects[id]) return <Error statusCode={404} />;

  return (
    <Main>
      <Hero
        title={state.language.projects[id]}
        goTo={projectSection}
        subtitle={wip.includes(id) ? "[WIP]" : undefined}
      />
      <Section ref={projectSection} pad="2rem 0 2rem 0">
        <CodeWrapper code_name={id} />
      </Section>
    </Main>
  );
}

export default Home;
