import React from "react"
import { Grid } from "@mui/material"
import styled from "styled-components"

const Preferences = () => {
  return (
    <section>
      <h2>// Preferences</h2>
      <p className="mb">
        
      </p>
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
    </section>
  )
}

export default Preferences

const ConfigList = styled.ul`
  li {
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
