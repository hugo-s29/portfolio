import { AppProps } from "next/app";
import Head from "next/head";
import { Style } from "../components/layout";
import { Provider } from "overmind-react";
import overmind, { useOvermind } from "../overmind";
import { useEffect, SFC } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../components/theme";
import ThemeToggle from "../components/themeToggle";
function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const Charset = () => <meta charset="UTF-8" />;

  return (
    <Provider value={overmind}>
      <ThemeLoad>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&display=swap"
            rel="stylesheet"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <Charset />
          <meta
            name="keywords"
            content="dev,developper,Hugo,Hugo SALOU,Hugos29,Hugo29,H29,H29Dev"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Hugo SALOU</title>
          <link
            href="/icon.png"
            rel="icon"
            type="image/png"
            sizes="1024x1024"
          />
          <link rel="apple-touch-icon" href="/icon.png"></link>
        </Head>
        <Style />
        <ThemeToggle />
        <Component {...pageProps} />
      </ThemeLoad>
    </Provider>
  );
}

const ThemeLoad: SFC = ({ children }) => {
  const { actions, state } = useOvermind();
  useEffect(() => {
    actions.loadTheme();
    actions.setLoaded();
    actions.loadLocales();
  });
  return (
    <ThemeProvider theme={state.dark ? dark : light}>
      {children}
      <Head>
        <meta name="theme-color" content={(state.dark ? dark : light).main} />
        {state.dark ? (
          <link rel="manifest" href="/manifest-dark.json" />
        ) : (
          <link rel="manifest" href="/manifest-light.json" />
        )}
      </Head>
    </ThemeProvider>
  );
};

export default App;
