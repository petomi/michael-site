import React from "react"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Project from "../components/project.tsx"

const exampleProject = () => (
  <Layout>
    <Parallax pages={2}>
      <Project offset={0} />
    </Parallax>
  </Layout>
)

export default exampleProject