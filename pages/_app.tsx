import React from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Loader = dynamic(() => import('../components/loader'), {
  ssr: false,
})

export const Dev = () => <>{'<Dev />'}</>

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Hugos29 {'<Dev />'}</title>
        </Head>
        <Loader></Loader>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
