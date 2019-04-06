import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menu.jpg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title="Menu" subtitle="Let's dig in" />
    </PageHeader>
  </Layout>
)

export default MenuPage
