import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default function About({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) {
  const tags = ["html", "css", "javascript", "react", "gatsby", "node"];

  return (
    <Layout>
      <div
        className="container-fluid flex-grow-1 d-flex align-items-center"
        style={{ backgroundColor: "#f1f5f8" }}
      >
        <div className="container-md py-lg-0 pt-5 flex-grow  d-flex flex-column justify-content-center">
          <div className="row no-gutters justify-content-center ">
            <div className="col-12  col-lg-4 my-auto pr-lg-4 justify-content-center">
              <Img
                fluid={fluid}
                className="mx-auto about-img"
                imgStyle={{ objectPosition: "top" }}
              />
            </div>
            <div
              className="col-12 col-lg-8 my-5 py-0  px-md-4 px-lg-5 d-flex flex-column justify-content-center"
              id="info"
            >
              <h2 className="text-capitalize font-weight-bold text-center text-lg-left">
                about me
              </h2>
              <div className="bar"></div>
              <div id="about-desc">
                Hi, I am Badshah. I am a Full Stack web and mobile developer
                with over a year of experience. I'm really passionate about
                coding. In my free times I like to create new stuff with my
                coding skills or write blogs over at{" "}
                <a href="https://www.kmabadshah.com" target="_blank">
                  <strong>kmabadshah.com</strong>
                </a>
                .
              </div>
              <div className="row no-gutters">
                {tags.map((tag, index) => {
                  return (
                    <div key={index} className="about-tag">
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    file(relativePath: { eq: "image-self.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
