import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/variables"

const Resume = () => {
  return (
    <section>
      <h2>// Work</h2>
      <ProjectList>
        <Project>
          <Year>Oct 2019 - Jun 2022</Year>
          <Position>
            WordPress Developer{" "}
            <span>// RFTB | Digital Design Agency - Weatherford, Texas</span>
          </Position>
          <Description>
            <p>
              Small, fast-paced design agency with a big vision, RFTB has an
              esteemed roster spanning from local, national, and international
              clients. While I can't disclose specific client information, I can
              say as a small agency developer, I had my hand in{" "}
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
              Fall of 2021, I successfully proposed, lead, and launched a Gatsby
              + Headless WordPress website! I've been looking forward to working
              more with Gatsby and Next.js ever since.
            </p>
          </Description>
        </Project>
        <Project>
          <Year>Oct 2018 - Oct 2019</Year>
          <Position>
            Web Developer <span>// TeamGlobal - Fort Worth, Texas</span>
          </Position>
          <Description>
            <p>
              TeamGlobal is a national aerospace staffing firm dedicated to
              providing the aerospace industry with highly skilled engineers and
              technicians. As the sole web developer, I was tasked with updating
              the company website. After a few months (and a close copyright
              infringement case - not my fault, funny story, ask me about it!),
              I not only delivered a revitalized website, but a
              web-scraper-powered custom CMS.
            </p>
          </Description>
        </Project>
      </ProjectList>
    </section>
  )
}

export default Resume

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
`
const Position = styled.h3`
  color: ${colors.white};
  margin-bottom: 1rem;

  span {
    color: ${colors.blue};
  }
`
const Description = styled.div`
  p {
    margin-bottom: 1.2rem;
  }
`
