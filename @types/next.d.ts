import * as React from 'react'
import { DocumentContext } from 'next/document'
import { NextPageContext } from 'next-server/dist/lib/utils'

export interface NextSFC<Props> extends React.SFC<Props> {
  getInitialProps: (ctx: DocumentContext | NextPageContext) => Promise<Props>
}
