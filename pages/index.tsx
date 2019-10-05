import Link from 'next/link'
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
        Redirecting to homepage
        <Link href="/home">
          <a>If doesn't work</a>
        </Link>
      </main>
    )
  }
}
