import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import SEO from "../seo";

export default function Layout({ children, home }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
        backgroundColor: "#f1f5f8",
      }}
    >
      <SEO />
      <Navbar home={home} />
      {children}
      <Footer />
    </div>
  );
}
