import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/about.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner
        title="About Us"
        subtitle="lets interact and know little about us"
      />
    </PageHeader>
  </Layout>
)

export default AboutPage
