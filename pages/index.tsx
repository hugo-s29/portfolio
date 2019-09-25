import * as React from 'react'
import { FaTwitter, FaDev, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { S1Menu, Section1, S1MenuItem, S1Icons, S1Content, S1Name } from '../components/s1'
import { S2Icon, Section2, S2Title, S2Icons, S2Top, S2Bottom } from '../components/s2'
import { Section3, S3Title } from '../components/s3'
import Button from '../components/button'
import Posts, { PostsProps } from '../helper/posts'

import '../static/pages/index.css'

import { TimelineMax } from 'gsap'

export interface IndexProps {
  PostsPps: PostsProps
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

  static async getInitialProps() {
    const PostsPps = await Posts.getInitialProps()
    return { PostsPps }
  }

  componentDidMount() {
    addEventListener('resize', () => this.setState({ width: window.innerWidth }))

    const container = document.querySelector('.container')
    this.tween = new TimelineMax({ paused: true })

    addEventListener('load', () => {
      this.tween && this.tween.play()
      alert("Site en développement, il n'est donc pas entièrement terminé")
    })

    container && container.classList.add('anim0')
    this.tween
      .call(() => container && container.classList.add('anim1'), undefined, null, 0)
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
    return (
      <main>
        <Section1 className="section-1">
          <S1Name></S1Name>
          <S1Content>
            <S1Menu>
              <S1MenuItem>
                <Link href="/projects">
                  <a>{'<Mes Projets />'}</a>
                </Link>
              </S1MenuItem>
              <S1MenuItem>
                <Link href="/blog">
                  <a>{'<Mes Posts />'}</a>
                </Link>
              </S1MenuItem>
              <S1MenuItem>
                <Link href="/tools">
                  <a>{'<Mes Outils />'}</a>
                </Link>
              </S1MenuItem>
            </S1Menu>
            <S1Icons>
              <FaTwitter></FaTwitter>
              <FaDev></FaDev>
              <FaGithub></FaGithub>
            </S1Icons>
          </S1Content>
        </Section1>
        <S2Top></S2Top>
        <Section2 className="section-2">
          <S2Title>J&apos;utilise</S2Title>
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
            et bien plus encore ...
          </Button>
        </Section2>
        <S2Bottom></S2Bottom>
        <Section3 className="section-3">
          <S3Title>Mes posts</S3Title>
          <Posts {...this.props.PostsPps}></Posts>
          <Button color="#E42391" upper defaultUp>
            et bien plus encore ...
          </Button>
        </Section3>
      </main>
    )
  }
}

export default Index
