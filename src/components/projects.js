import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import Img from "gatsby-image";

export default function Projects() {
  const {
    allStrapiProject: { edges: data },
  } = useStaticQuery(graphql`
    {
      allStrapiProject(filter: { featured: { eq: true } }) {
        edges {
          node {
            id
            desc
            proj_link {
              id
              title
            }
            tag {
              id
              title
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
  `);

  return (
    <div className="container-fluid p-0 px-sm-3" id="proj">
      <div className="container-xl">
        <div className="row p-0 justify-content-center no-gutters">
          <div className="col d-flex flex-column py-5 align-items-center">
            <h1 id="proj-banner" className="mt-5">
              Featured Projects
            </h1>
            <div className="bar" style={{ marginBottom: "4rem" }}></div>

            {data.map((project, index) => {
              const {
                node: { desc, id, proj_link, tag, title, image },
              } = project;

              return (
                <div key={id} className="w-100 h-100">
                  {/* for small screen start */}
                  <div className="card proj-card-sm d-lg-none border mb-5">
                    <Img
                      fluid={image.childImageSharp.fluid}
                      className="card-img-top img-fluid"
                      alt="Projects"
                    />
                    <div className="card-img-overlay"></div>

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
                          return title.includes("github") ? (
                            <a
                              href={title}
                              rel="noreferrer"
                              target="_blank"
                              key={id}
                            >
                              <FaGithubSquare className="proj-link" />
                            </a>
                          ) : (
                            <a
                              href={title}
                              rel="noreferrer"
                              target="_blank"
                              key={id}
                            >
                              <FaShareSquare className="proj-link" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* for small screen end */}

                  {/* for large screen start */}

                  <div className="proj-lg d-none d-lg-flex">
                    <Img
                      className="img-fluid"
                      fluid={image.childImageSharp.fluid}
                      alt="Projects"
                      style={{ marginLeft: index % 2 != 0 ? "auto" : "" }}
                    />
                    <div className="card-img-overlay"></div>

                    <div
                      className="card d-none d-lg-block"
                      style={{
                        left: index % 2 != 0 ? "unset" : "30%",
                        right: index % 2 != 0 ? "30%" : "unset",
                      }}
                    >
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
                            return title.includes("github") ? (
                              <a
                                href={title}
                                rel="noreferrer"
                                target="_blank"
                                key={id}
                              >
                                <FaGithubSquare className="proj-link" />
                              </a>
                            ) : (
                              <a
                                href={title}
                                rel="noreferrer"
                                target="_blank"
                                key={id}
                              >
                                <FaShareSquare className="proj-link" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* for large screen end */}
                </div>
              );
            })}

            <Link id="btn-projects" to="/projects">
              projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
