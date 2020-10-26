import React from "react";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import Layout from "../components/layout";

export default function Projects({ data }) {
  const {
    allStrapiProject: { edges: articles },
  } = data;

  return (
    <Layout>
      <div className="container-fluid d-flex flex-grow-1 my-auto">
        <div className="container-xl d-flex p-0 pb-4 pt-2 flex-grow-1">
          <div className="d-flex flex-grow-1 py-4 px-1 justify-content-center align-items-center flex-column">
            <h1
              className="text-capitalize text-center mt-5 flex-grow-1 font-weight-bold"
              id="proj-title"
            >
              all projects
            </h1>
            <div className="bar" style={{ marginBottom: "4rem" }}></div>
            {articles.map((article, index) => {
              const {
                node: { desc, id, proj_link, tag, title, image },
              } = article;

              return (
                <div className="pg-proj-card" key={id}>
                  <Img
                    className={`img ${index % 2 === 0 && "img-left"}`}
                    fluid={image.childImageSharp.fluid}
                    alt="Projects"
                  />
                  <div className={`card ${index % 2 === 0 && "card-left"}`}>
                    <div className="card-body">
                      <div className="proj-num">0{index + 1}.</div>
                      <div className="proj-title">{title}</div>
                      <div className="proj-desc">{desc}</div>
                      <div className="proj-tags row no-gutters">
                        {tag.map(({ title, id }) => {
                          return (
                            <div className="proj-tag mr-2" key={id}>
                              {title}
                            </div>
                          );
                        })}
                      </div>

                      <div className="proj-links">
                        {proj_link.map(({ id, title }, index) => {
                          return title.includes("github.com") ? (
                            <a href={title} target="_blank" key={id}>
                              <FaGithubSquare className="proj-link" />
                            </a>
                          ) : (
                            <a href={title} target="_blank" key={id}>
                              <FaShareSquare className="proj-link" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const queryRes = graphql`
  {
    allStrapiProject {
      edges {
        node {
          desc
          id
          proj_link {
            id
            title
          }
          tag {
            title
            id
          }
          title
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
