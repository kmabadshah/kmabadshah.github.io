import React from "react";

export default function Service({ logo, title, desc }) {
  return (
    <div className="service">
      <div className="d-flex flex-column align-items-center">
        <div className="service-logo mb-4">{logo}</div>
        <div className="service-title mb-2">{title}</div>
        <div className="service-bar"></div>
        <div className="service-desc mt-4">{desc}</div>
      </div>
    </div>
  );
}
