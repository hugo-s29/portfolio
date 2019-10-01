import * as React from 'react'
import styled from 'styled-components'
import { brightness } from '../helper/colors'

export interface S2IconProps {
  color: string
  little?: string
  size?: number
  hover?: string
}

export const S2Icon: React.SFC<S2IconProps> = ({
  color,
  little,
  children,
  size = 2.54,
}) => {
  const Container = styled.div`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    border-radius: 0.58rem;
    margin: 0.5rem;
    font-family: 'DM Sans';
    font-weight: bold;
    transition-duration: 1s;
    text-transform: uppercase;
    color: #1e1e1e;
    background: ${brightness(color, 30)};
    &:hover {
      background: #1e1e1e;
      color: ${brightness(color, 30)};
      box-shadow: 8px 8px 0px 0px ${brightness(color, -50)};
      transform: translate(-8px, -8px);
    }
  `
  const Big = styled.h5`
    font-size: ${size}rem;
    transform: translate(-6px, -6px);
    user-select: none;
  `
  const Little = styled.h6`
    font-size: ${size / 2}rem;
    transform: translate(-6px, -6px);
    user-select: none;
  `

  return (
    <Container>
      {little && <Little>{little}</Little>}
      <Big>{children}</Big>
    </Container>
  )
}

export const S2Title = styled.h2`
  font-family: DM Serif Display;
  font-size: 3rem;
  line-height: 5rem;
  color: #e4e4e4;
`
export const S2Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50%;
  @media screen and (max-width: 1024px) {
    max-width: 65%;
  }
  @media screen and (max-width: 800px) {
    max-width: 80%;
  }
`
export const Section2 = styled.section`
  background-color: rgba(249, 248, 113, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
export const S2Top = () => (
  <div className="decoration-section">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F9F871"
        fillOpacity="0.5"
        d="M0,224L0,32L36.9,32L36.9,64L73.8,64L73.8,224L110.8,224L110.8,0L147.7,0L147.7,256L184.6,256L184.6,64L221.5,64L221.5,96L258.5,96L258.5,128L295.4,128L295.4,256L332.3,256L332.3,224L369.2,224L369.2,256L406.2,256L406.2,256L443.1,256L443.1,160L480,160L480,160L516.9,160L516.9,96L553.8,96L553.8,96L590.8,96L590.8,192L627.7,192L627.7,288L664.6,288L664.6,0L701.5,0L701.5,128L738.5,128L738.5,160L775.4,160L775.4,0L812.3,0L812.3,224L849.2,224L849.2,128L886.2,128L886.2,288L923.1,288L923.1,160L960,160L960,224L996.9,224L996.9,128L1033.8,128L1033.8,256L1070.8,256L1070.8,224L1107.7,224L1107.7,288L1144.6,288L1144.6,192L1181.5,192L1181.5,0L1218.5,0L1218.5,160L1255.4,160L1255.4,64L1292.3,64L1292.3,160L1329.2,160L1329.2,32L1366.2,32L1366.2,288L1403.1,288L1403.1,64L1440,64L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"
      ></path>
    </svg>
  </div>
)
export const S2Bottom = () => (
  <div className="decoration-section">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F9F871"
        fillOpacity="0.5"
        d="M0,64L0,288L36.9,288L36.9,256L73.8,256L73.8,192L110.8,192L110.8,288L147.7,288L147.7,32L184.6,32L184.6,224L221.5,224L221.5,288L258.5,288L258.5,192L295.4,192L295.4,224L332.3,224L332.3,128L369.2,128L369.2,224L406.2,224L406.2,96L443.1,96L443.1,224L480,224L480,32L516.9,32L516.9,160L553.8,160L553.8,32L590.8,32L590.8,64L627.7,64L627.7,32L664.6,32L664.6,64L701.5,64L701.5,192L738.5,192L738.5,320L775.4,320L775.4,128L812.3,128L812.3,320L849.2,320L849.2,288L886.2,288L886.2,128L923.1,128L923.1,224L960,224L960,96L996.9,96L996.9,96L1033.8,96L1033.8,96L1070.8,96L1070.8,32L1107.7,32L1107.7,256L1144.6,256L1144.6,288L1181.5,288L1181.5,224L1218.5,224L1218.5,32L1255.4,32L1255.4,256L1292.3,256L1292.3,128L1329.2,128L1329.2,256L1366.2,256L1366.2,128L1403.1,128L1403.1,224L1440,224L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
      ></path>
    </svg>
  </div>
)
