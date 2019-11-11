import React from 'react'
import Router from 'next/router'

export default class extends React.Component {
  static async getInitialProps({ res }: { res: any }) {
    if (res) {
      res.writeHead(302, {
        Location: '/home',
      })
      res.end()
    } else {
      Router.push('/home')
    }
    return {}
  }
  render() {
    return (
      <main>
        Redirecting to homepage ...
        <br />
        <a href="/home">If doesn't work</a>
      </main>
    )
  }
}
