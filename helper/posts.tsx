import { S3Posts, S3Post } from '../components/s3'
import fetch from 'isomorphic-unfetch'
import { NextSFC } from '../@types/next'
import Language from '../translation/lang'
import getLang from './lang'
import styled from 'styled-components'

export interface PostsProps {
  posts: any[]
  lang: Language
}

const Title = styled.h3`
  margin: 10rem;
  font-size: 2.6rem;
  color: #ff8d54;
  font-family: Poppins;
  font-weight: bold;
  line-height: 5.5rem;
  @media screen and (max-width: 1024px) {
    margin: 3rem;
  }
`

const Posts: NextSFC<PostsProps> = ({ posts, lang }) =>
  posts.length == 0 ? (
    <Title>{lang.posts.noPosts}</Title>
  ) : (
    <S3Posts>
      {posts.map(({ cover_image, url, title, id }) => (
        <S3Post image={cover_image} url={url} title={title} key={id}></S3Post>
      ))}
    </S3Posts>
  )

Posts.getInitialProps = async ctx => {
  const username = 'hugos29'
  const URL = `https://dev.to/api/articles${
    username ? `?username=${username}` : ''
  }`
  const rawPosts = await fetch(URL)
  const posts = await rawPosts.json()
  const lang = getLang(ctx)
  return {
    posts,
    lang,
  }
}

export default Posts
