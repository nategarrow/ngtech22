import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { colors } from "../styles/variables"
import Section from "../components/Section"
import SEO from "../components/seo"

const WorkPage = () => {
  return (
    <>
      <SEO
        title="What I've Done | Nathan Garrow | Front-End Web Developer"
        desc="I've had the joy of working with some cool people on some cool projects."
      />
      <Section title="// Projects">
        <ProjectList>
          <Project>
            <Position>
              NG Staem
            </Position>
            <Description>
              <p>
                NG Staem is a video game store landing page utilizing a Supabase API. Designs and game data for this project were supplied, but the implementation was up to the user to decide.I decided to approach this project using Next.js, Styled Components, and TypeScript.</p>
              <p>Highlights</p>
              <ul className="bulletted">
                <li>TypeScript</li>
                <li>Next.js v12</li>
                <li>Supabase API</li>
                <li>GSAP Animation</li>
              </ul>

              <p>Challenges</p>
              <ul className="bulletted">
                <li>TypeScript learning curve.</li>
              </ul>

              <p><a
                href="https://portfolio-ng-staem.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                View on Netlify
              </a></p>
            </Description>
          </Project>
        </ProjectList>
      </Section>
      <Section title="// Work">
        <ProjectList>
          <Project>
            <Year>Oct 2019 - Jun 2022</Year>
            <Position>
              WordPress Developer <span>// RFTB | Digital Design Agency</span>
            </Position>
            <Description>
              <p>
                Small, fast-paced design agency with a big vision, RFTB has an
                esteemed roster spanning from local, national, and international
                clients. While I can't disclose specific client information, I can
                say as a developer for a small agency, I had my hand in{" "}
                <a
                  href="https://rftb.agency/work"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  everything
                </a>
                .
              </p>
              <p>
                However, I was never fully satisfied with just using WordPress.
                For most of my time with the agency, I strongly advocated for
                switching to Headless WordPress with a React Framework frontend.
                Fall of 2021, I successfully proposed, led, and deployed a Gatsby
                + Headless WordPress website! I've been looking forward to working
                more with Gatsby and Next.js ever since.
              </p>
            </Description>
          </Project>
          <Project>
            <Year>Oct 2018 - Oct 2019</Year>
            <Position>
              Web Developer{" "}
              <span>// TeamGlobal | Aerospace &amp; Aviation Staffing</span>
            </Position>
            <Description>
              <p>
                TeamGlobal is a national aerospace staffing firm dedicated to
                providing the aerospace industry with highly skilled engineers and
                technicians. As the sole web developer, I was tasked with updating
                the company website. After a few months (and a close copyright
                infringement case - not my fault, funny story, ask me about it!),
                I not only delivered a revitalized website, but a
                web-scraper-powered custom CMS as well.
              </p>
            </Description>
          </Project>
        </ProjectList>
      </Section>
    </>
  )
}

export default WorkPage

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const Project = styled.li`
  padding: 0;
  margin-bottom: clamp(40px, 8vh, 60px);
  text-align: left;
`
const Year = styled.p`
  color: ${colors.red};
  margin-bottom: 0;
  font-size: 0.75em;
  font-style: italic;

  ::selection {
    background: ${colors.white};
  }
  ::-moz-selection {
    background: ${colors.white};
  }
`
const Position = styled.h3`
  color: ${colors.white};
  margin-bottom: 1rem;

  span {
    color: ${colors.blue};
  }
`
const Description = styled.div``