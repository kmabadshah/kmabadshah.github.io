import React from "react";
import { socialLinks } from "../constants";

export default function Footer() {
  return (
    <div className="container-fluid py-4" id="footer-fluid">
      <div className="container">
        <div className="row justify-content-center">
          {socialLinks.map(({ id, name, link }) => {
            return (
              <a key={id} href={link} className="ft-social">
                {name}
              </a>
            );
          })}
        </div>

        <div id="copy">
          COPYRIGHT©2020 <span style={{ color: "#2caeba" }}>KMABADSHAH</span>{" "}
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}
