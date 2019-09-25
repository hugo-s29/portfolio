import { S3Posts, S3Post, S3Title } from '../components/s3'
import fetch from 'isomorphic-unfetch'
import { NextSFC } from '../types/next'

export interface PostsProps {
  posts: any[]
}

const Posts: NextSFC<PostsProps> = ({ posts }) => {
  return posts.length == 0 ? (
    <S3Title as="h3" style={{ fontSize: '2.6rem', color: '#FF8D54', margin: '10rem' }}>
      Pas de posts pour le moment
    </S3Title>
  ) : (
    <S3Posts>
      {posts.map(({ cover_image, url, title, id }) => (
        <S3Post image={cover_image} url={url} title={title} key={id}></S3Post>
      ))}
    </S3Posts>
  )
}

Posts.getInitialProps = async () => {
  const username = 'hugos29'
  const URL = `https://dev.to/api/articles${username ? `?username=${username}` : ''}`
  const rawPosts = await fetch(URL)
  const posts = await rawPosts.json()
  return {
    posts,
  }
}

export default Posts
