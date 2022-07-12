import React from 'react'
import { ContextProviderComponent } from "../lib/context"
import styled from "styled-components"
import CanvasBG from '../canvas'
import NavBar from "../components/NavBar"
import "../styles/globalStyles.scss"

type LayoutProps = {
  children: any
  pageContext?: any
}

const PageTemplate = ({ children, pageContext }: LayoutProps) => {
  const home = pageContext.layout === "home" ? true : false

  return <ContextProviderComponent>
    <Main className={home ? `home-main` : `page-main`}>
      <NavBar home={home} />
      <CanvasBG home={home} />
      <article>
        {children}
      </article>
    </Main>
  </ContextProviderComponent>


}

export default PageTemplate

const Main = styled.main`
  position: relative;
  transition: all .4s ease-in-out;
  z-index: 20;
  isolation: isolate;
  
  &.home-main {
    height: 100vh;
  }
  &.page-main {
    min-height: 100vh;
    
    article {
      backdrop-filter: blur(2px);
      pointer-events: none;
      position: relative;
      padding-top: 100px;
      padding-bottom: 100px;
      left: 0;
      min-height: calc(100vh - 220px);

      @media (max-width: 764px) {
        padding-top: 140px;
        padding-bottom: 60px;
      }
    }
  }

  section {
    padding: clamp(40px, 12vh, 100px) 10px clamp(30px, 8vh, 50px);
    width: min(100%, 90vw, 1100px);
    margin-left: auto;
    margin-right: auto;

    h2 {
      margin-bottom: clamp(20px, 5vh, 40px);
    }
  }

  @media (max-width: 764px) {
    section {
      padding: 50px 10px;

      p {
        text-align: left;
      }
    }
  }
`
