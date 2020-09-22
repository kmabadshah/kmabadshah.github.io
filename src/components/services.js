import React from "react";
import Service from "./service";
import { FaCode } from "react-icons/fa";
import { services } from "./constants";

export default function Services() {
  return (
    <div className="container-fluid p-0 py-sm-3" id="services-fluid">
      <div
        className="d-flex container-xl px-0 flex-column align-items-center justify-content-center"
        id="services"
      >
        <h1 id="services-banner">Services</h1>
        <div className="bar"></div>

        <div className="row no-gutters mt-5 mx-2">
          {services.map(({ id, title, logo, desc }) => {
            return (
              <div className="col-md-6 col-lg-4 col-12" key={id}>
                <Service key={id} title={title} logo={logo} desc={desc} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
