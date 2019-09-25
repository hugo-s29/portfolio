import * as React from 'react'

export interface NextSFC<Props> extends React.SFC<Props> {
  getInitialProps: () => Promise<Props>
}
