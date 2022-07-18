import React from 'react'
import styled from 'styled-components'

import WorkProject from "./WorkProject"


// Types
type Props = {
  sort?: boolean
  list: {
    node: {
      prismicId: string
      data: ListDataType
    }
  }[]
}
type DateType = {
  id: string
  slice_type: string
  primary: {
    date_started: string
    date_left: string
  }
}
type ListType = {
  id: string
  title: string
  company?: string
  desc?: string
  link?: string
  duration: DateType
}
type ListDataType = {
  title: string
  company?: string
  description?: {
    text?: string
    html?: string
  }
  duration?: DateType | null
  body?: any
}
type SortType = (a: ListType, b: ListType) => number

// Helper Functions
const sortList: SortType = (a, b) => {
  if (a.duration.primary.date_started > b.duration.primary.date_started) return -1
  if (a.duration.primary.date_started > b.duration.primary.date_started) return 1
  return 0
}

// Component
const JobList = ({ list, sort = false }: Props) => {
  const ulList: ListType[] = list.map(item => {
    const { data } = item.node
    return {
      id: item.node.prismicId,
      title: data.title,
      company: data.company ? data.company : "",
      desc: data.description ? data.description.html : "",
      duration: data?.body ? data.body[0] : null
    }
  })
  if (sort) ulList.sort(sortList)

  console.log(`ulList`, ulList);

  return (
    <List>
      {ulList.length && ulList.map(item => {
        const { id } = item

        return <WorkProject key={id} {...item} />
      })}
    </List>
  )
}

export default JobList

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`