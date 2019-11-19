import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import * as React from 'react'
import Language from '../translation/lang'

export interface IDocument {
  lang: Language
}

export default class MyDocument extends Document<IDocument> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  /*
          <link rel="stylesheet" href="/static/color.css" />
   */
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=DM+Sans|Poppins:400,700,900|Fira+Code&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="shortcut icon"
            href="/static/icons/960.png"
            type="image/png"
          />
          <link rel="stylesheet" href="/static/global.css" />
          <meta
            name="google-site-verification"
            content="1cWe1oIfhxDkn6t-RUASQuAAnkpT0OEz0kOUL0tXYQw"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="description" content="Hugo SALOU, Développeur Web" />
          <script>
            https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js
          </script>
        </Head>
        <body>
          <div className="overlay"></div>
          <div className="overlay-2"></div>
          <div className="container">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
