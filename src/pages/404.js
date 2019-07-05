import React from "react"

import { ParallaxProvider, Parallax  } from 'react-scroll-parallax'
import SEO from "../components/SEO"
import HeroSVG from "../components/HeroSVG"
import MediaQuery from 'react-responsive'
import "../styles/index.scss"


const IndexPage = () => (
    <ParallaxProvider>
      <SEO title="404 Error / Not Found"
           keywords={[`web developer`, `frontend developer`, `react`]}
      />
      <section className="home-hero">

        <HeroSVG />

        <MediaQuery minWidth={1030}>
            <div className="hero-content">
              <Parallax x={[0, 0]} y={[160, 0]}>
                <h1 className="main-heading">Error 404</h1>
              </Parallax>
              <Parallax x={[0, 0]} y={[-40, 200]}>
                <h2>Page Not Found</h2>
              </Parallax>
            </div>
        </MediaQuery>
        <MediaQuery maxWidth={1029}>
            <div className="hero-content">
                <h1 className="main-heading">Error 404</h1>
                <h2>Page Not Found</h2>
            </div>
        </MediaQuery>
      </section>

    </ParallaxProvider>
  )

export default IndexPage
