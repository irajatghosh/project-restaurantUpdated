import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class Quickinfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickWrapper>
          <p className="text">
            We focus on serving the most delicious energetic coffee along with
            some amezing foods which will make your day a happy day.. We focus
            on serving the most delicious energetic coffee along with some
            amezing foods which will make your day a happy day.. We focus on
            serving the most delicious energetic coffee along with some amezing
            foods which will make your day a happy day..
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
          </Link>
        </QuickWrapper>
      </Section>
    )
  }
}

const QuickWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
