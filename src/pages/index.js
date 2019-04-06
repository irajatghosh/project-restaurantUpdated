import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/home.jpg"
import QuickInfo from "../components/HomePageComponents/Quickinfo"
import Gallary from "../components/HomePageComponents/Gallery-1"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Oasis Cafe" subtitle="Vetterstraße main street, Chemnitz">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallary />
  </Layout>
)

export default IndexPage
