import React from "react"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet title="Today's yoga" />
    <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/lMTyp5npt78"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    allowfullscreen></iframe>
  </>
)

export default IndexPage
