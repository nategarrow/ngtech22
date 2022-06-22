import React from "react"
import styled from "styled-components"
import { Grid } from "@mui/material"
/* Icons */
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"

const WebPresence = () => {
  return (
    <section>
      <h2>// Web Presence</h2>
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
  )
}

export default WebPresence

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
