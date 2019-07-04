import React from "react"

import { ParallaxProvider, Parallax  } from 'react-scroll-parallax'
import SEO from "../components/SEO"
import HeroSVG from "../components/HeroSVG"
import IconGrid from "../components/IconGrid"
import MeSVG from "../components/MeSVG"
import about from "../constants/about"
import majorProficiencies from "../constants/majorProficiencies"
import minorProficiencies from "../constants/minorProficiencies"
import accoutrements from "../constants/accoutrements"
import professionalHistory from "../constants/professionalHistory"
import Media from "react-media"
import "../styles/index.scss"


const IndexPage = () => (
    <ParallaxProvider>
      <SEO title="Senior Developer in Cincinnati, OH"
           keywords={[`web developer`, `frontend developer`, `react`]}
      />
      <section className="home-hero">

        <HeroSVG />

        <Media query="(min-width: 1030px)">
          {matches =>
            matches ? (
              <div className="hero-content">
                <Parallax x={[0, 0]} y={[160, 0]}>
                  <h1 className="main-heading">Ryan Benhase</h1>
                </Parallax>
                <Parallax x={[0, 0]} y={[-40, 200]}>
                  <h2>Web Developer in Cincinnati, OH</h2>
                </Parallax>
              </div>
              ) : (
              <div className="hero-content">
                  <h1 className="main-heading">Ryan Benhase</h1>
                  <h2>Web Developer in Cincinnati, OH</h2>
              </div>
            )
          }
        </Media>
      </section>

      <section className="below-hero">
        <h1>About Me</h1>

        <Media query="(min-width: 768px)">
          {matches =>
            matches ? (
              <div className="split-section">
                <Parallax x={[-10, 20]} y={[0, 0]} className="about-text" key="s1">

                  <h2><span>10 Years</span> Professional Dev Experience</h2>
                  <p>
                    {about.p1}
                  </p>
                  <p>
                    {about.p2}
                  </p>
                </Parallax>
                <Parallax x={[20, -10]} y={[0, 0]} key="s2" className="about-svg">
                  <MeSVG/>
                </Parallax>
              </div>
            ) : (
              <div className="about-mobile">
                <h2><span>10 Years</span> Professional Dev Experience</h2>
                <p>
                  {about.p1}
                </p>
                <p>
                  {about.p2}
                </p>
              </div>
            )
          }</Media>
      </section>
      <section className="section-secondary">

        <IconGrid title="Major Proficiencies" data={majorProficiencies} className="major-proficiencies" />

      </section>
      <section className="section-primary other-skills-accoutrements split-section-large">

        <section>
          <IconGrid title="Other Skills" data={minorProficiencies} columns={4} className="minor-proficiencies" />
        </section>

        <section>
          <IconGrid title="Accoutrements" data={accoutrements} columns={4} className="minor-proficiencies" />
        </section>

      </section>
      <section className="section-tertiary">
        <h1>Professional History</h1>
        <div className="professional-history inner">
          <div className="currently">

            <h2>Currently</h2>
            <ul>
            {
              professionalHistory.currently.map( (item, i) => {
                return (
                  <li key={i}>
                    <strong>{item.title}</strong><br/>
                    {item.org}<br/>
                    {
                      item.hasOwnProperty("subOrg") ?
                        [item.subOrg, <br key={"br" + i} />] : null
                    }

                    <em>{item.since}</em>
                  </li>
                )
              })
            }
            </ul>
          </div>

          <div className="previously">
            <h2>Previously</h2>
            <ul>
            {
              professionalHistory.previously.map( (item, i) => {
                return (
                  <li key={i}>
                    <strong>{item.title}</strong><br/>
                    {item.org}
                  </li>
                )
              })
            }
            </ul>
          </div>

        </div>
      </section>

      <footer className="section-footer">
        <h1>Get in Touch</h1>
        <a className="phone" href="tel:+15135496871">513.549.6871</a>
        <a href="mailto:ryan.benhase@gmail.com" style={{margin: "0 auto"}} className="button">
          Or Just Email Me
        </a>
      </footer>
    </ParallaxProvider>
  )

export default IndexPage