import React, { useRef } from "react"
import type { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CanvasBG from "../canvas"
import styled from "styled-components"

/* Icons */
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"

/* Styles */
import "../styles/globalStyles.scss"
import { Grid } from "@mui/material"

// markup
const IndexPage = ({ path }: PageProps) => {
  return (
    <>
      <CanvasBG />
      <Header>
        <MountainBg>
          <StaticImage
            src="../images/mountainscape@2x.png"
            alt="mountain background"
            className="mountain-bg"
            placeholder="tracedSVG"
          />
          <TitleContainer>
            <Title>Nathan Garrow</Title>
            <Subtitle>WordPress + JAMstack Developer</Subtitle>
          </TitleContainer>
        </MountainBg>
      </Header>
      <Main>
        <section>
          <h2>{"<AboutMe />"}</h2>
          <p>
            I'm Nathan! By day, a frontend developer at RFTB, a bespoke
            WordPress digital experience agency based out of Weatherford, Texas.
            My day-to-day includes managing the entire life cycle of websites
            for local, national, and international property management
            companies, sites for institutions of higher education, or digital
            interactive app experiences for world-renowned art museums built
            with Ionic.
          </p>
          <p>
            When I'm not working, I am working on a personal web project (more
            to be announced soon), learning new skills (this page was my first
            steps with TypeScript!), camping and backpacking with my wife,
            playing Dungeons &amp; Dragons with friends, or{" "}
            <a
              href="https://www.instagram.com/p/B3K8MMdF2rE/"
              target="_blank"
              rel="noreferrer noopenner"
            >
              shooting the stars
            </a>{" "}
            in the darkest state parks I can find.
          </p>
          <p>
            Lately, my interests have included TypeScript, Three.js, Next.js,
            and Gatsby, as well as headless CMS's such as Strapi, Contentful,
            and Keystone.
          </p>
        </section>
        <section>
          <h2>{"<Config />"}</h2>
          <p className="mb">
            While my setup is constantly changing, below are some of my
            preferred tools.
          </p>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
              <ConfigList>
                <li>VS Code + Firefox Quantum Dark</li>
                <li>Terminal: Hyper</li>
                <li>Browser: Brave</li>
              </ConfigList>
            </Grid>
            <Grid item xs={12} md={6}>
              <ConfigList>
                <li>SSG of Choice: Gatsby</li>
                <li>SSR of Choice: Next.js</li>
                <li>Headless CMS: Strapi/Contentful</li>
              </ConfigList>
            </Grid>
          </Grid>
        </section>
        <section>
          <h2>{"<WebPresence />"}</h2>
          <Grid container spacing={3} justifyContent="center">
            <IconGrid item>
              <a
                href="https://twitter.com/nategarrow_"
                target="_blank"
                rel="noreferrer noopenner"
              >
                <TwitterIcon />
              </a>
            </IconGrid>
            <IconGrid item>
              <a
                href="https://www.linkedin.com/in/ntgarrow/"
                target="_blank"
                rel="noreferrer noopenner"
              >
                <LinkedInIcon />
              </a>
            </IconGrid>
            <IconGrid item>
              <a
                href="https://github.com/nategarrow"
                target="_blank"
                rel="noreferrer noopenner"
              >
                <GitHubIcon />
              </a>
            </IconGrid>
          </Grid>
        </section>
      </Main>
    </>
  )
}

export default IndexPage

const Header = styled.header`
  height: 105vh;
  background: #0e0a16;
  z-index: 5;
`
const MountainBg = styled.div`
  position: absolute;
  top: 40vh;
  left: 0;
  width: 100%;
  height: 60vh;
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
`
const Subtitle = styled.p`
  color: white;
`
const Main = styled.main`
  background-color: #0e0a16;
  height: 100vh;
  padding-top: 140px;

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
const ConfigList = styled.ul`
  li {
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
const IconGrid = styled(Grid)`
  svg {
    width: clamp(40px, 4vw, 60px);
    height: clamp(40px, 4vw, 60px);
    fill: #ff0023;
    transition: all 0.2s ease-in-out;
  }

  a:hover,
  a:focus-visible {
    svg {
      fill: #006adf;
    }
  }
`
