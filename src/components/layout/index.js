import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

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
      <Navbar home={home} />
      {children}
      <Footer />
    </div>
  );
}
