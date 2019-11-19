import * as React from 'react'
import { FaTwitter, FaDev, FaGithub } from 'react-icons/fa'
import {
  S1Menu,
  Section1,
  S1MenuItem,
  S1Icons,
  S1Content,
  S1Name,
} from '../components/s1'
import {
  S2Icon,
  Section2,
  S2Title,
  S2Icons,
  S2Top,
  S2Bottom,
} from '../components/s2'
import { Section3, S3Title } from '../components/s3'
import Button from '../components/button'
import Break from '../components/break'
import Posts, { PostsProps } from '../helper/posts'

import '../static/page_index.css'

import { TimelineMax } from 'gsap'
import Language from '../translation/lang'
import getLang from '../helper/lang'
import { NextPageContext } from 'next-server/dist/lib/utils'
import { Section4, S4Title } from '../components/s4'

export interface IndexProps {
  PostsPps: PostsProps
  lang: Language
}

export interface IndexState {
  width: number
}

class Index extends React.PureComponent<IndexProps, IndexState> {
  tween: null | TimelineMax

  constructor(props: IndexProps) {
    super(props)
    this.state = {
      width: 0,
    }
    this.tween = null
  }

  static async getInitialProps(ctx: NextPageContext) {
    const PostsPps = await Posts.getInitialProps(ctx)
    const lang = getLang(ctx)
    return { PostsPps, lang }
  }

  componentDidMount() {
    addEventListener('resize', () =>
      this.setState({ width: window.innerWidth })
    )

    const container = document.querySelector('.container')
    this.tween = new TimelineMax({ paused: true })

    addEventListener('load', () => {
      this.tween && this.tween.play()

      //alert("Site en développement, il n'est donc pas entièrement terminé")
    })

    if (this.tween && document.readyState == 'complete') this.tween.play()

    container && container.classList.add('anim0')
    this.tween
      .call(
        () => container && container.classList.add('anim1'),
        undefined,
        null,
        0
      )
      .call(
        () => {
          if (!container) return null
          container.classList.remove('anim0')
          container.classList.remove('anim1')
        },
        undefined,
        null,
        2
      )
      .fromTo(
        '.decoration-section, .section-2',
        1,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        3
      )
      .fromTo(
        '.overlay-2',
        2,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        4
      )
  }

  render() {
    const { lang } = this.props
    return (
      <main>
        <Section1 id="welcome-section" className="section-1">
          <S1Name>Hugo SALOU</S1Name>
          <S1Content>
            <S1Menu>
              <S1MenuItem>
                <a href="/projects">{`<${lang.index.s1.projects} />`}</a>
              </S1MenuItem>
              <S1MenuItem>
                <a href="/blog">{`<${lang.index.s1.posts} />`}</a>
              </S1MenuItem>
              <S1MenuItem>
                <a href="/tools">{`<${lang.index.s1.tools} />`}</a>
              </S1MenuItem>
            </S1Menu>
            <S1Icons>
              <a href="https://twitter.com/_hugos29">
                <FaTwitter></FaTwitter>
              </a>
              <a href="https://dev.to/hugos29">
                <FaDev></FaDev>
              </a>
              <a id="profile-link" href="https://github.com/hugos29dev">
                <FaGithub></FaGithub>
              </a>
            </S1Icons>
          </S1Content>
        </Section1>
        <S2Top></S2Top>
        <Section2 className="section-2">
          <S2Title>{lang.index.s2.title}</S2Title>
          <S2Icons>
            <S2Icon color="#F9F871">JS</S2Icon>
            <S2Icon color="#FFC54F">TS</S2Icon>
            <S2Icon color="#FF8D54" little="NODE">
              JS
            </S2Icon>
            <S2Icon size={2} color="#FF536F">
              CSS
            </S2Icon>
            <S2Icon size={1.64} color="#E42391">
              HTML
            </S2Icon>
            <S2Icon size={1.34} color="#9C27B0">
              REACT
            </S2Icon>
          </S2Icons>
          <Button color="#9C27B0" upper>
            {lang.index.s2.btn}
          </Button>
        </Section2>
        <S2Bottom></S2Bottom>
        <Section3 className="section-3">
          <S3Title>{lang.index.s3.title}</S3Title>
          <Posts {...this.props.PostsPps}></Posts>
          <Button color="#E42391" upper defaultUp>
            {lang.index.s3.btn}
          </Button>
        </Section3>
        <Break />
        <Section4 className="section-4" id="projects">
          <S4Title>{lang.index.s4.title}</S4Title>
          <a href="#" style={{ display: 'none' }}>
            t
          </a>
          <Posts {...this.props.PostsPps}></Posts>
          <Button color="#E42391" upper defaultUp>
            {lang.index.s4.btn}
          </Button>
        </Section4>
      </main>
    )
  }
}

export default Index
