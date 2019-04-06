import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contact.jpg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="Contact us" subtitle="Let's get in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
