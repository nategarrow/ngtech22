import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import SEO from "../components/seo"
import CanvasBG from "../canvas"
import styled from "styled-components"

// markup
const Page404 = () => {
  return (
    <>
      <SEO
        title="Error: 404 | Nate Garrow Tech | Fort Worth, TX Web Developer"
        desc="Fort Worth, TX based web developer seeking a new adventure as a React Developer"
      />
      <CanvasBG />
      <article>
        <Head>
          <TitleWrapper>
            <TitleContainer>
              <Title>Well hello there!</Title>
              <Subtitle>
                Doesn't like anyone else is here. Would you like to try the{" "}
                <Link to="/">Home</Link> page?
              </Subtitle>
            </TitleContainer>
          </TitleWrapper>
        </Head>
      </article>
    </>
  )
}

export default Page404

const Head = styled.header`
  height: 100vh;
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
