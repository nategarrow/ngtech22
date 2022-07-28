import React from 'react'
import styled from 'styled-components';

import { colors } from '../../styles/variables';

type DateType = {
  id: string
  slice_type: string
  primary: {
    date_started: string
    date_left: string
  }
}

type Props = {
  id: string
  title: string
  company?: string
  desc?: string
  link?: string
  duration: DateType
}
const formatDate = (unfDate: string) => {
  const date = new Date(unfDate).toLocaleDateString('en-us', { year: "numeric", month: "short" })
  return date
}

const getDate = (d: DateType) => {
  if (!d) return ""

  switch (d.slice_type) {
    case "past_position":
      return `${formatDate(d.primary.date_started)} - ${formatDate(d.primary.date_left)}`
    case "current_position":
      return `${formatDate(d.primary.date_started)} - Present`
    default:
      return ""
  }
}

const WorkProject = ({ title, company, duration, desc, link }: Props) => {
  const pTitle = company ? `${title} <span>// ${company}</span>` : title
  const dur = duration ? getDate(duration) : false

  return (
    <ProjectWrapper>
      {dur && <Year dangerouslySetInnerHTML={{ __html: dur }} />}
      <Position dangerouslySetInnerHTML={{ __html: pTitle }} />
      {desc && <Description dangerouslySetInnerHTML={{ __html: desc }} />}
      {link && <a href={link} target="_blank" rel="noreferrer noopener">View Project</a>}
    </ProjectWrapper>
  )
}

export default WorkProject

const ProjectWrapper = styled.li`
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
const Description = styled.div`
  p {
    font-size: .9em;
    font-weight: 100;
    color: ${colors.grey};
  }
`
