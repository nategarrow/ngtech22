import React from "react"

import CanvasBG from "../canvas"
import styled from "styled-components"
import Header from "../components/Header"
import {
  About,
  Preferences,
  Resume,
  WebPresence,
} from "../components/pageSections"
import SEO from "../components/seo"
/* Styles */
import "../styles/globalStyles.scss"
import { colors } from "../styles/variables"

// markup
const IndexPage = () => {
  return (
    <>
      <SEO title="Nate Garrow Tech | Fort Worth, TX Web Developer" desc="" />
      <CanvasBG />
      <Header />
      <Main>
        <About />
        <Resume />
        <Preferences />
        <WebPresence />
      </Main>
    </>
  )
}

export default IndexPage

const Main = styled.main`
  position: relative;
  min-height: 100vh;
  padding-top: 140px;
  padding-bottom: 140px;
  z-index: 20;
  background-color: ${colors.background};

  section {
    padding: clamp(40px, 12vh, 100px) 10px clamp(30px, 8vh, 50px);
    width: min(100%, 90vw, 1300px);
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    h2 {
      margin-bottom: clamp(20px, 5vh, 40px);
    }
  }

  @media (max-width: 764px) {
    padding-top: 40px;

    section {
      padding: 50px 10px;
    }
  }
`
