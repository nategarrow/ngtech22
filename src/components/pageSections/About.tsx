import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/variables"

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

const About = () => {
  return (
    <Section>
      <h2>// About Me</h2>
      <p>
        Hey! I'm Nathan. For the last few years, I've been a WordPress
        developer, creating bespoke WordPress themes for a digital design
        agency. However, the last few years I've had my eyes on everything
        React, with a particular interest in Gatsby and Next.js. I have lost
        track of the number of conferences I've attended virtually, webinars
        I've listened to during lunch, and hours spent on tutorials. <br />I am
        ready for the next step.
      </p>
      <p>
        <u>
          I am currently seeking employment with an agency that leverages these
          modern frameworks to create performant, responsive websites.
        </u>
      </p>
      <p>
        Lately, my interests have included TypeScript, Three.js, advanced
        GraphQL, improving my skills with Gatsby and Next.js, as well as
        headless CMS's such as Strapi, Contentful, and Keystone.
      </p>
      <p>
        When I'm not sitting in front of a computer or watching YouTube
        tutorials, I enjoy exploring new places with my wife, camping, exploring
        museums, playing Dungeons &amp; Dragons with friends, or{" "}
        <ExtLink link="https://www.instagram.com/p/B3K8MMdF2rE/">
          shooting&nbsp;the&nbsp;stars
        </ExtLink>{" "}
        in the darkest state parks I can find.
      </p>
    </Section>
  )
}

export default About

const Section = styled.section`
  isolation: isolate;
  position: relative;

  // &:after {
  //   content: "";
  //   position: absolute;
  //   right: 0;
  //   top: 100%;
  //   transform: translate(50%, -50%);
  //   border-radius: 50%;
  //   z-index: -1;
  //   width: clamp(300px, 75vw, 1800px);
  //   height: clamp(300px, 75vw, 1800px);
  //   background: radial-gradient(
  //     rgba(229, 42, 67, 0.7),
  //     rgba(229, 42, 67, 0) 40%
  //   );
  // }
`
