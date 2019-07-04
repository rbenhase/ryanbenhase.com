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
      <SEO title="404 Error / Not Found"
           keywords={[`web developer`, `frontend developer`, `react`]}
      />
      <section className="home-hero">

        <HeroSVG />

        <Media query="(min-width: 1030px)">
          {matches =>
            matches ? (
              <div className="hero-content">
                <Parallax x={[0, 0]} y={[160, 0]}>
                  <h1 className="main-heading">Error 404</h1>
                </Parallax>
                <Parallax x={[0, 0]} y={[-40, 200]}>
                  <h2>Page Not Found</h2>
                </Parallax>
              </div>
              ) : (
              <div className="hero-content">
                  <h1 className="main-heading">Error 404</h1>
                  <h2>Page Not Found</h2>
              </div>
            )
          }
        </Media>
      </section>

    </ParallaxProvider>
  )

export default IndexPage
