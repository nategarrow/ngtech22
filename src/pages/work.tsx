import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Section, SEO, WorkList } from "../components"

const WorkPage = () => {
  const workData = useStaticQuery(graphql`
    query WorkQuery {
      allPrismicJobs {
        edges {
          node {
            prismicId
            data {
              title
              company
              description {
                html
              }
              body {
                ... on PrismicJobsDataBodyStillEmployed {
                  id
                  slice_type
                  primary {
                    date_started
                  }
                }
                ... on PrismicJobsDataBodyPastPosition {
                  id
                  slice_type
                  primary {
                    date_started
                    date_left
                  }
                }
              }
            }
          }
        }
      }
      allPrismicProject {
        edges {
          node {
            prismicId
            data {
              title
              description {
                html
              }
              project_link {
                url
              }
            }
          }
        }
      }
    }
  `)

  const { allPrismicJobs, allPrismicProject } = workData

  return (
    <>
      <SEO
        title="What I've Done | Nathan Garrow | Front-End Web Developer"
        desc="I've had the joy of working with some cool people on some cool projects."
      />
      <Section title="// Work">
        <WorkList list={allPrismicJobs.edges} sort={true} />
      </Section>
      <Section title="// Projects" short={true}>
        <WorkList list={allPrismicProject.edges} />
      </Section>

    </>
  )
}

export default WorkPage