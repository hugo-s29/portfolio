import * as React from 'react'
import Language from '../translation/lang'

export interface LoaderState {
  loaded: boolean
  display: boolean
}

export interface LoaderProps {
  lang: Language
}

class Loader extends React.Component<LoaderProps, LoaderState> {
  constructor(props: LoaderProps) {
    super(props)
    this.state = { loaded: false, display: true }
    window.addEventListener('load', () => {
      this.setState({ loaded: true })
      setTimeout(() => this.setState({ display: false }), 1000)
    })
  }
  render() {
    return this.state.display ? (
      <div className="loader" style={{ opacity: this.state.loaded ? 0 : 1 }}>
        <p>{this.props.lang.loader}.</p>
        <div className="loader-cube-grid">
          <div className="loader-cube loader-cube1"></div>
          <div className="loader-cube loader-cube2"></div>
          <div className="loader-cube loader-cube3"></div>
          <div className="loader-cube loader-cube4"></div>
          <div className="loader-cube loader-cube5"></div>
          <div className="loader-cube loader-cube6"></div>
          <div className="loader-cube loader-cube7"></div>
          <div className="loader-cube loader-cube8"></div>
          <div className="loader-cube loader-cube9"></div>
        </div>
      </div>
    ) : (
      <div></div>
    )
  }
}

export default Loader
