import * as React from 'react'
import styled from 'styled-components'
import { brightness } from '../helper/colors'

export interface ButtonProps {
  color: string
  upper?: boolean
  hover?: string
  defaultUp?: boolean
}

const Button: React.SFC<ButtonProps> = ({ children, color, upper, defaultUp }) => {
  const animUp = defaultUp
    ? `
    box-shadow: none;
    transform: translate(0px,0px);  
  `
    : `
    box-shadow: 8px 8px 0px 0px ${brightness(color, -50)};
    transform: translate(-8px, -8px);
  `
  const normalUp = defaultUp
    ? `
    box-shadow: 8px 8px 0px 0px ${brightness(color, -50)};
    transform: translate(-8px, -8px);
  `
    : `
    box-shadow: none;
    transform: translate(0px,0px);  
  `

  const Btn = styled.button`
    color: #e4e4e4;
    border: none;
    min-width: 20rem;
    min-height: 3rem;
    font-size: 1.52rem;
    border-radius: 0.32rem;
    ${upper ? 'text-transform: uppercase;' : ''}
    ${normalUp}
    font-family: Raleway;
    font-weight: 500;
    background-color: ${color};
    transition-duration: 1s;
    @media screen and (max-width: 700px) {
      font-size: 1rem;
      min-width: unset;
      padding: 0 1rem;
      min-height: 2rem;
    }
    &:hover,
    &.animation {
      ${animUp}
    }
  `
  return <Btn>{children}</Btn>
}

export default Button
