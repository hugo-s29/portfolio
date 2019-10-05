import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Language from '../translation/lang'

export interface NavProps {
  lang: Language
}

const NavComponent: React.SFC<NavProps> = ({ lang: { nav } }) => {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffc54f;
    min-height: 40px;

    h3 {
      font-weight: bold;
    }

    a {
      color: #ffc54f;
      font-weight: 300;
      background: linear-gradient(
          to top,
          #ffc54f 2%,
          #ffc54f 8%,
          transparent 8.01%
        )
        no-repeat left bottom / 0 100%;
      text-decoration: none;
      transition: background-size 0.5s;

      &:hover {
        background-size: 100% 100%;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 40%;

      li {
        list-style: none;
      }
      @media screen and (max-width: 1280px) {
        width: 60%;
      }
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  `

  return (
    <Nav>
      <h3>
        <Link href="/home">
          <a>Hugos29</a>
        </Link>
      </h3>
      <ul>
        <li>
          <Link href="/yearly">
            <a>{nav.yearly}</a>
          </Link>
        </li>
        <li>
          <Link href="/tools">
            <a>{nav.tools}</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>{nav.blog}</a>
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default NavComponent
