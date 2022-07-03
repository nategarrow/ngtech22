import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import SEO from "../components/seo"
/* Styles */
import "../styles/globalStyles.scss"
import { colors } from "../styles/variables"

// markup
const IndexPage = () => {
  return (
    <>
      <SEO
        title="Nathan Garrow | Front-End Web Developer"
        desc="Fort Worth, TX based web developer seeking a new adventure as a React Developer"
      />
      <TitleWrapper>
        <TitleContainer>
          <Title>Nathan Garrow</Title>
          <Subtitle>
            Former WordPress Web Developer looking for the Next(.js) big thing
          </Subtitle>
        </TitleContainer>
      </TitleWrapper>
    </>
  )
}

export default IndexPage

const TitleWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  backdrop-filter: blur(.5px);

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
