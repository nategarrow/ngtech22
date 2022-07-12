import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Grid } from "@mui/material"
/* Icons */
import EmailIcon from "@mui/icons-material/Email"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { colors } from "../styles/variables"
import Section from "../components/Section"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Reach Me | Nathan Garrow | Front-End Web Developer"
        desc="What makes this self-taught web developer tick?"
      />
      <Section title="// Let's Connect" short={true} center={true}>
        <Grid container spacing={3} justifyContent="center">
          <IconGrid item>
            <a
              href="mailto:nathan@nategarrow.tech"
            >
              <EmailIcon />
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
              href="https://twitter.com/nategarrow_"
              target="_blank"
              rel="noreferrer noopenner"
            >
              <TwitterIcon />
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
      </Section>
    </>
  )
}

export default ContactPage

const IconGrid = styled(Grid)`
  svg {
    width: clamp(40px, 4vw, 60px);
    height: clamp(40px, 4vw, 60px);
    fill: ${colors.red};
    transition: all 0.2s ease-in-out;
  }

  a:hover,
  a:focus-visible {
    svg {
      transform: scale(1.2);
      fill: #006adf;
    }
  }
`
