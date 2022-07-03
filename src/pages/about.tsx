import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { colors } from "../styles/variables"
import Section from "../components/Section"
import { Grid } from "@mui/material"

type LinkProps = {
  link: string
  children: string
}

const ExtLink = ({ link, children }: LinkProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer noopenner">
      {children}
    </a>
  )
}


const AboutPage = () => {
  return (
    <>
      <Section title="// About Me">
        <p>
          Hey! I'm Nathan. For the last few years, I've been a WordPress
          developer, creating bespoke WordPress themes for RFTB, a digital design
          agency based out of Weatherford, TX. However, the last few years I've had
          my eyes on everything
          React, with a particular interest in Gatsby and Next.js. I have lost
          track of the number of conferences I've attended virtually, webinars
          I've listened to during lunch, and hours spent on tutorials. <br />Now, I am
          ready for the next step.
        </p>
        <p>
          <u>
            I am currently seeking employment with an agency that leverages modern
            frameworks to create performant, responsive websites.
          </u>
        </p>
        <p>
          Lately, my interests have included TypeScript, Three.js, advanced
          GraphQL, improving my skills with Gatsby and Next.js, as well as
          headless CMS's such as Strapi, Contentful, and Keystone.js.
        </p>
        <p>
          When I'm not sitting in front of a computer or watching YouTube
          tutorials, I enjoy exploring new places with my wife, camping and
          hiking, exploring museums, playing Dungeons &amp; Dragons with friends,
          or{" "}
          <ExtLink link="https://www.instagram.com/p/B3K8MMdF2rE/">
            shooting&nbsp;the&nbsp;stars
          </ExtLink>{" "}
          in the darkest state parks I can find.
        </p>
      </Section>
      <Section title="// Preferences">
        <p className="mb"></p>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}>
            <ConfigList>
              <li>VS Code + Firefox Quantum Dark Theme</li>
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
      </Section>
    </>
  )
}

export default AboutPage

const ConfigList = styled.ul`
  li {
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
