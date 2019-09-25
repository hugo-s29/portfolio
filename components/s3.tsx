import styled from 'styled-components'
import Link from 'next/link'
import { brightness } from '../helper/colors'
import * as React from 'react'

export const Section3 = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`
export const S3Title = styled.h2`
  font-family: Poppins;
  font-weight: bold;
  font-size: 3.52rem;
  line-height: 5.5rem;

  color: #ffc54f;
`
export const S3Posts = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  transition-duration: 1s;
  margin: 2rem 0;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`

export interface PostProps {
  image: string
  url: string
  title: string
}

const Post = styled.div`
  border-radius: 1rem;
  object-fit: cover;
  overflow: hidden;
  height: 13rem;
  width: 17rem;
  margin: 1.54rem;
  line-height: 1.5rem;
  font-family: Raleway;
  transform: translate(-8px, -8px);
  background: ${brightness('#f9f871', -30)};
  border-color: ${brightness('#f9f871', -30)};
  box-shadow: 8px 8px 0px 0px ${brightness('#f9f871', -80)};
  font-weight: bold;
  transition-duration: 1s;
  img {
    object-fit: contain;
    width: 100%;
  }
  p {
    color: #101010;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  &:hover {
    transform: translate(0px, 0px);
    box-shadow: none;
    background: #f9f871;
  }
  @media screen and (max-width: 860px) {
    margin: 0.5rem 0;
    width: calc(100% - 1rem - 8px);
    object-fit: none;
  }
`

export const S3Post: React.SFC<PostProps> = ({ title, image, url }) => (
  <Post>
    <Link href={url}>
      <a>
        <img src={image} alt="" />
        <p>{title}</p>
      </a>
    </Link>
  </Post>
)
