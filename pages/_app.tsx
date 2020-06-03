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
  return (
    <Provider value={overmind}>
      <ThemeLoad>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&display=swap"
            rel="stylesheet"
          />
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
    <ThemeProvider theme={state.dark ? dark : light}>{children}</ThemeProvider>
  );
};

export default App;
