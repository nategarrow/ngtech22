import React, { useRef } from "react"
import styled from "styled-components"
import useScrollPosition from "../hooks/useScrollPosition"
import { colors } from "../styles/variables"

const Header = () => {
  const pos: number = useScrollPosition(0.25) //scrollY * 0.5

  return (
    <Head>
      <TitleWrapper>
        <TitleContainer
          style={{
            transform: `translateY(${pos}px)`,
            opacity: Math.max(1 - pos / 250, 0),
          }}
        >
          <Title>Nathan Garrow</Title>
          <Subtitle>
            Former WordPress Web Developer looking for the Next(.js) big thing
          </Subtitle>
        </TitleContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M443.5 98.5l-211 211.1c-4.7 4.7-12.3 4.7-17 0L4.5 98.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L224 269.9 419.5 74.5c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.6 4.6 4.6 12.2-.1 16.9zm0 111l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 397.9 28.5 202.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.4.1-17.1z" />
        </svg>
      </TitleWrapper>
    </Head>
  )
}

export default Header

const Head = styled.header`
  height: 105vh;
`
const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  backdrop-filter: blur(1px);

  .mountain-bg {
    position: absolute;
    width: 100%;
    height: 120%;
    z-index: 3;

    img {
      object-position: top center;
      overflow: hidden;
      object-fit: cover;
    }
  }

  svg {
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${colors.red};
    width: 55px;
    height: auto;
    opacity: 0;
    animation: fadeIn 2s ease-in-out 1s forwards;

    @media (max-width: 764px) {
      bottom: 5vh;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`
const TitleContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;

  @media (max-width: 764px) {
    padding-top: 5vh;
    max-width: 95%;
    margin: 0 auto;

    p {
      max-width: 30ch;
      margin: 0 auto;
    }
  }
`
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 6px;
  line-height: 1;
  text-shadow: 4px 0 0 black;
`
const Subtitle = styled.p`
  color: white;
  max-width: 40ch;
  margin: 0 auto;
`
