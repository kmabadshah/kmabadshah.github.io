import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Experiences() {
  const [currentButton, setCurrentButton] = React.useState(0);
  const queryRes = useStaticQuery(graphql`
    {
      allStrapiExperience(sort: { fields: strapiId, order: DESC }) {
        edges {
          node {
            id
            date
            company
            title
            job_desc {
              id
              title
            }
          }
        }
      }
    }
  `);

  const data = queryRes.allStrapiExperience.edges;
  const { id, date, company, title, job_desc } = data[currentButton].node;

  return (
    <div className="container-fluid px-0" style={{ backgroundColor: "white" }}>
      <div className="container-xl justify-content-center p-0 d-flex flex-column align-items-center">
        <h1 id="xp-banner">Experience</h1>
        <div className="mb-5 bar"></div>
        <div className="row mb-5 no-gutters d-lg-none">
          {data.map((item, index) => {
            return (
              <button
                className={`btn-xp-top ${
                  index === currentButton && "btn-xp-top-selected"
                }`}
                key={item.node.id}
                onClick={() => setCurrentButton(index)}
              >
                {item.node.company}
              </button>
            );
          })}
        </div>

        <div className="row no-gutters">
          <div className="col-2 mr-5 d-none d-lg-flex flex-column">
            {data.map((item, index) => {
              return (
                <button
                  className={`btn-xp-left ${
                    index === currentButton && "btn-xp-left-selected"
                  }`}
                  key={item.node.id}
                  onClick={() => setCurrentButton(index)}
                >
                  {item.node.company}
                </button>
              );
            })}
          </div>
          <div className="col" id="xp-info">
            <div className="xp-title ">{title}</div>
            <div className="xp-company">{company}</div>
            <div className="xp-date">{date}</div>
            {job_desc.map((item) => {
              return (
                <div
                  className="xp-job_desc row no-gutters   mb-3"
                  key={item.id}
                >
                  <div className="col-auto align-self-start  ">
                    <FaAngleDoubleRight className="xp-job_desc-icon " />
                  </div>
                  <div className="col align-self-start  ">
                    <p className="xp-job_desc-title">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Link to="/contact" className="btn text-uppercase" id="xp-more-info">
          more info
        </Link>
      </div>
    </div>
  );
}
