import React from "react"
import HeroSVG from "./HeroSVG"
import Media from "react-media"
import {Parallax} from "react-scroll-parallax"

class Hero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fontsLoaded:false}
  }

  componentDidMount() {

    document.fonts.ready.then( () => {
      this.setState({fontsLoaded:true});
    })

    document.fonts.onloadingdone = () => {
      this.setState({fontsLoaded:true});
    }
  }


  render() {
    return (
      <section className={this.state.fontsLoaded ? "home-hero ready" : "home-hero loading"}>

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
    );
  }
}


export default Hero;
