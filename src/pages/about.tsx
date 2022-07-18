import React, { useEffect } from "react"
import styled from "styled-components"
import Section from "../components/Section"
import { Grid } from "@mui/material"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

interface PrefType {
  preference: string
}

const AboutPage = () => {
  const aboutData = useStaticQuery(graphql`
    query AboutQuery {
      prismicAboutPage {
        prismicId
        data {
          seo_title
          seo_description {
            text
          }
          about_text {
            html
          }
          preferences {
            preference
          }
        }
      }
    }
  `)

  useEffect(() => {

  }, [aboutData])

  const { data } = aboutData.prismicAboutPage
  const { preferences } = data

  const myPreferences = preferences.slice()

  const prefLeft: PrefType[] = myPreferences.length > 2 ? myPreferences.splice(0, Math.ceil(myPreferences.length / 2)) : myPreferences
  const prefRight: PrefType[] = myPreferences

  return (
    <>
      <SEO
        title={data.seo_title || "Nathan Garrow | Jamstack Developer"}
        desc={data.seo_description || ""}
      />
      <Section title="// About Me" html={data.about_text.html} />
      <Section title="// Preferences">
        <p className="mb"></p>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}>
            <ConfigList>
              {prefLeft.length && prefLeft.map((pref, i) => {
                return <li key={`left-${i}`}>{pref.preference}</li>
              })}
            </ConfigList>
          </Grid>
          <Grid item xs={12} md={6}>
            <ConfigList>
              {prefRight.length && prefRight.map((pref, i) => {
                return <li key={`right-${i}`}>{pref.preference}</li>
              })}
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
