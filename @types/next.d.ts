import * as React from 'react'
import { DocumentContext } from 'next/document'
import { NextPageContext } from 'next-server/dist/lib/utils'

export type PageCtx<Q = {}> = NextPageContext & {
  query?: Q
}

export interface NextSFC<Props, Query = {}> extends React.SFC<Props> {
  getInitialProps?: (ctx: PageCtx<Query>) => Promise<Props | void>
}

export interface NextSFCGIP<Props, Query = {}> extends React.SFC<Props> {
  getInitialProps: (ctx: PageCtx<Query>) => Promise<Props | void>
}
