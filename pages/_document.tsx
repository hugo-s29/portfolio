import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Nav from '../components/nav'
import * as React from 'react'

export default class MyDocument extends Document {
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
            href="https://fonts.googleapis.com/css?family=Fira+Code|Inconsolata|Poppins:700,900|Raleway:300,500,700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="/static/global.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="description" content="Hugo SALOU, Développeur Web" />
        </Head>
        <body>
          <div className="overlay"></div>
          <div className="overlay-2"></div>
          <div className="container">
            <Nav></Nav>
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
