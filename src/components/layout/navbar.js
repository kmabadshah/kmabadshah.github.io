import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { FaAlignRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { navLinks, socialLinks } from "../constants.js";

export default function Navbar(props) {
  const [navIsClosed, setNavIsClosed] = useState(true);
  function reportWindowSize() {
    if (window.innerWidth >= 992) {
      setNavIsClosed(true);
    }
  }

  useEffect(() => {
    if (window) window.onresize = reportWindowSize;
  }, []);

  return (
    <div
      className={`container-fluid p-0 px-sm-3 d-flex align-items-center py-auto ${
        !props.home && "remove-color"
      }`}
      id="navbar"
    >
      <nav className="navbar container-lg my-auto">
        <div className="mr-3" id="nav-logo">
          <span id="nav-logo-first">KMA</span>
          <span id="nav-logo-second">Badshah</span>
        </div>
        <button
          className="navbar-toggler d-md-none"
          onClick={() => onNavOpen()}
          id="nav-btn-open"
        >
          <FaAlignRight />
        </button>

        {/* SIDEBAR start */}
        <div id="sidebar" className={`${!navIsClosed && "toggled"}`}>
          <div className="row no-gutters h-100 p-4">
            <div className="col">
              <div className="row no-gutters mx-4 mt-4 justify-content-end">
                <button id="nav-btn-close" onClick={() => onNavClose()}>
                  <ImCross />
                </button>
              </div>

              <div className="col d-flex flex-column h-100 justify-content-center align-items-center">
                {navLinks.map(({ id, name, link }, index) => {
                  if (id === 4) {
                    return (
                      <a
                        href={link}
                        key={id}
                        target="_blank"
                        className="nav-link-sidebar text-capitalize"
                      >
                        {name}
                      </a>
                    );
                  }
                  return (
                    <Link
                      to={link}
                      key={id}
                      className={`nav-link-sidebar text-capitalize`}
                    >
                      {name}
                    </Link>
                  );
                })}

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
            </div>
          </div>
        </div>
        {/* SIDEBAR END */}

        <div
          id="nav-main"
          className="row d-none d-md-block justify-content-between align-items-center no-gutters"
        >
          {navLinks.map(({ link, id, name }, index) => {
            if (id === 4) {
              return (
                <a
                  href={link}
                  key={id}
                  target="_blank"
                  className="nav-link-main text-capitalize"
                >
                  {name}
                </a>
              );
            }
            return (
              <Link
                to={link}
                key={id}
                className="nav-link-main text-capitalize"
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );

  function onNavOpen() {
    setNavIsClosed(false);
  }

  function onNavClose() {
    setNavIsClosed(true);
  }
}
