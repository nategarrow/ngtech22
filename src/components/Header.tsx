import React, { useRef } from "react"
import styled from "styled-components"
import useScrollPosition from "../hooks/useScrollPosition"

const Header = () => {
  const pos: number = useScrollPosition(0.25) //scrollY * 0.5

  return (
    <Head>
      <TitleWrapper>
        <TitleContainer
          style={{
            transform: `translateY(${pos}px)`,
          }}
        >
          <Title>Nathan Garrow</Title>
          <Subtitle>
            Former WordPress Web Developer looking at the Next(.js) big thing!
          </Subtitle>
        </TitleContainer>
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
  top: 20vh;
  left: 0;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

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
`
const TitleContainer = styled.div`
  position: relative;
  padding-top: 10vh;
  z-index: 10;
  text-align: center;
  @media (max-width: 764px) {
    paddint-top: 5vh;
  }
`
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 6px;
`
const Subtitle = styled.p`
  color: white;
`
