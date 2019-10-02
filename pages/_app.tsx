import React from 'react'
import App, { AppContext } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Nav from '../components/nav'
import getLang from '../helper/lang'
import Language from '../translation/lang'

const Loader = dynamic(() => import('../components/loader'), {
  ssr: false,
})

export const Dev = () => <>{'<Dev />'}</>

interface Props {
  lang: Language
}

class MyApp extends App<Props> {
  static async getInitialProps(ctx: AppContext) {
    const originVariables = await this.origGetInitialProps(ctx)
    return {
      lang: getLang(ctx.ctx),
      ...originVariables,
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Hugos29 {'<Dev />'}</title>
        </Head>
        <Nav lang={this.props.lang}></Nav>
        <Loader lang={this.props.lang}></Loader>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
