import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { socialLinks } from "./constants.js";

export default function Hero() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "image-self.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className="container-fluid p-0 p-sm-3" id="hero">
      <div className="container-lg h-100">
        <div className="row h-100   no-gutters">
          <div
            className="col d-flex flex-column   justify-content-center rm-pos"
            id="hero-left"
          >
            <div className="bar"></div>
            <h1 className="mb-3 mt-2" id="hero-name">
              I'm Badshah
            </h1>
            <h5 id="hero-desc">Full Stack Web and Mobile Developer</h5>
            <Link
              to="/contact"
              className="btn text-uppercase mt-4"
              id="hero-btn-contact"
            >
              contact me
            </Link>

            <div className="row no-gutters justify-content-between social-links-sidebar">
              {socialLinks.map(({ id, name, link }) => {
                return (
                  <a href={link} key={id} className="social-link-sidebar">
                    {name}
                  </a>
                );
              })}
            </div>
          </div>
          <div
            className="col rm-pos d-none d-lg-flex flex-column justify-content-center"
            id="hero-right"
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="It's me bitches"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
