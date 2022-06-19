import React from "react"
import Helmet from "react-helmet"

type AppProps = {
  title: string
  desc: string
}
const SEO = ({ title, desc }: AppProps) => {
  return (
    <Helmet title={title}>
      <meta charSet="utf-8" />
      <meta name="description" content={desc || ""} />
    </Helmet>
  )
}

export default SEO
