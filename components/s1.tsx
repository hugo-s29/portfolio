import styled from 'styled-components'

export const S1Name = styled.h1`
  color: #ff8d54;
  font-weight: 900;
  font-size: 4rem;
  line-height: 10rem;
  font-family: Poppins;
  max-width: 688px;
  margin: 3rem 7rem;
  transition-duration: 1s;
  align-self: center;
  line-height: 5rem;
  mask {
    transition-duration: 1s;
    transition-delay: 1s;
  }

  path {
    transition-duration: 1s;
  }

  @media screen and (max-width: 1024px) {
    margin: 2rem 5rem;
  }
  @media screen and (max-width: 600px) {
    margin: 10% 5%;
  }
`

export const S1Menu = styled.ul`
  font-family: 'Fira Code', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
  font-size: 1.52rem;
  line-height: 2.52rem;
  list-style: none;

  li {
    transform: translateX(0);
  }

  a {
    text-decoration: none;
    color: #ff536f;
    background: linear-gradient(
        to top,
        #ff536f 0%,
        #ff536f 6%,
        transparent 6.01%
      )
      no-repeat left bottom / 0 100%;
    text-decoration: none;
    transition: background-size 0.5s;

    &:hover {
      background-size: 100% 100%;
    }
  }
`
export const S1MenuItem = styled.li``
export const S1Icons = styled.div`
  font-size: 6rem;
  svg {
    padding: 1rem 0;
    margin: 0.15rem;
    fill: #f44336;
    transition-duration: 1s;
    border-radius: 10px;
    &:hover {
      fill: #e4e4e4;
      background-color: #f44336;
    }
  }
`
export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
`
export const S1Content = styled.div`
  padding-top: 25vh;
  display: flex;
  justify-content: space-around;
  text-align: left;
  align-items: center;
  @media screen and (max-width: 1024px) {
    text-align: center;
    flex-direction: column;
    padding-top: 0;
  }
`
