import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Article() {
  const {
    allStrapiArticle: { edges: articles },
  } = useStaticQuery(
    graphql`
      {
        allStrapiArticle(sort: { fields: strapiId, order: ASC }) {
          edges {
            node {
              desc
              date
              id
              tag
              title
              link
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
    `
  );

  return (
    <div className="container-fluid px-0" style={{ backgroundColor: "white" }}>
      <div className="container-xl px-0">
        <div className="d-flex flex-column py-5 align-items-center">
          <h1 id="art-banner" className="text-center mt-4">
            Latest Articles
          </h1>

          <div
            className="bar mx-auto"
            style={{ marginBottom: "2.25rem" }}
          ></div>
          <div className="row no-gutters h-100 mt-3 mb-5">
            {articles.map(
              ({ node: { desc, date, id, tag, title, image, link } }) => {
                return (
                  <div
                    className="col-md-6 col-xl-4 pl-2 col-12 art-card-col"
                    key={id}
                  >
                    <a href={link} target="_blank" rel="noreferrer">
                      <div className="card art-card">
                        <Img
                          className="card-img-top art-img img-fluid"
                          fluid={image.childImageSharp.fluid}
                          alt="Article"
                        />

                        <div className="card-body d-flex flex-column my-1 my-lg-0">
                          <div className="art-title mb-3">{title}</div>
                          <div className="art-desc mb-3">{desc}</div>
                          <div className="row mt-auto justify-content-between no-gutters align-items-start">
                            <div className="art-tag">{tag}</div>
                            <div className="art-date">{date}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              }
            )}
          </div>
          <a
            href="http://kmabadshah.com"
            target="_blank"
            rel="noreferrer"
            id="btn-blog"
            className="my-3"
          >
            blog
          </a>
        </div>
      </div>
    </div>
  );
}
