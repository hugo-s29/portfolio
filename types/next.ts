import * as React from 'react'
import { DocumentContext } from 'next/document'

export interface NextSFC<Props> extends React.SFC<Props> {
  getInitialProps: (ctx: DocumentContext) => Promise<Props>
}
