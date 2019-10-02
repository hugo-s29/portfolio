import * as React from 'react'
import { TimelineMax } from 'gsap'
import { S3Title, Section3 } from '../components/s3'
import Posts, { PostsProps } from '../helper/posts'
import Button from '../components/button'
import getLang from '../helper/lang'
import { NextPageContext } from 'next-server/dist/lib/utils'
import Language from '../translation/lang'

export interface ProjectsProps {
  lang: Language
  PostsPps: PostsProps
}

export interface ProjectsState {}

class Projects extends React.Component<ProjectsProps, ProjectsState> {
  tween: TimelineMax | null = null
  static async getInitialProps(ctx: NextPageContext) {
    const PostsPps = await Posts.getInitialProps(ctx)
    const lang = getLang(ctx)
    return { PostsPps, lang }
  }
  componentDidMount() {
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
      <Section3 as="main">
        <S3Title>{lang.index.s3.title}</S3Title>
        <Posts {...this.props.PostsPps}></Posts>
        <Button color="#E42391" upper defaultUp>
          {lang.index.s3.btn}
        </Button>
      </Section3>
    )
  }
}

export default Projects
