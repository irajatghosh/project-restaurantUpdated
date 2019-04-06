import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Img from "gatsby-image"

const singleImage = graphql`
  {
    image1: file(relativePath: { eq: "homeGalary/coffee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "homeGalary/dessert.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "homeGalary/burger.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function() {
  return (
    <StaticQuery
      query={singleImage}
      render={data => {
        const image1 = data.image1.childImageSharp.fluid
        const image2 = data.image2.childImageSharp.fluid
        const image3 = data.image3.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item1">
                <Img fluid={image1} />
                <p className="info">awesome coffee</p>
              </div>
              <div className="item item2">
                <Img fluid={image2} />
                <p className="info">delicious dessert</p>
              </div>
              <div className="item item3">
                <Img fluid={image3} />
                <p className="info">yummy burger</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two two"
      "one one three three";
    .item1 {
      grid-area: one;
    }
    .item2 {
      grid-area: two;
    }
    .item3 {
      grid-area: three;
    }
  }
`
