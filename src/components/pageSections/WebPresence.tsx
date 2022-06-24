import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Grid } from "@mui/material"
/* Icons */
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { colors } from "../../styles/variables"
import Section from "../Section"
const WebPresence = () => {
  return (
    <Section title="// Web Presence">
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
      <a href="https://app.daily.dev/nategarrow">
        <Card
          src="https://api.daily.dev/devcards/caf1c7bced5d4c3eb487f36f37a3f815.png?r=hqy"
          alt="Nathan G's Daily.Dev Card"
        />
      </a>
    </Section>
  )
}

export default WebPresence

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
      fill: #006adf;
    }
  }
`
const Card = styled.img`
  width: min(250px, 100%);
  margin: 2rem auto;
`
