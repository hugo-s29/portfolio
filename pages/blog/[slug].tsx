import * as React from 'react'
import fetch from 'isomorphic-unfetch'
//@ts-ignore
import mdx from '@mdx-js/mdx'
import { getBaseUrl } from '../../helper/apiFetcher'
import { PageCtx } from '../../@types/next'
import { IncomingHttpHeaders } from 'http'
import { withRouter, NextRouter } from 'next/router'

export interface PostProps {
  headers?: IncomingHttpHeaders
  router: NextRouter
}
export interface PostState {
  Content: null | any
}

class Post extends React.Component<PostProps, PostState> {
  static getInitialProps = async ({ req }: PageCtx) => {
    if (!req) return {}

    return { headers: req.headers }
  }

  componentDidMount() {
    if (this.props.headers) this.fetchData(this.props.headers)
  }

  fetchData = async (headers: IncomingHttpHeaders) => {
    const { slug } = this.props.router.query
    console.log(
      `${getBaseUrl(false, headers)}/api/blog${slug ? `?file=${slug}` : ''}`
    )
    const request = await fetch(
      `${getBaseUrl(false, headers)}/api/blog${slug ? `?file=${slug}` : ''}`
    )
    const content = await request.json()
    console.log(content)

    const jsx = await mdx(content[0])
    this.setState({ Content: jsx })
  }

  state = { Content: null }
  render() {
    const { Content } = this.state
    //@ts-ignore
    return <div>{Content && <Content />}</div>
  }
}

export default withRouter(Post)
