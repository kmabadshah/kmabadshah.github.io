import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Hero from "../components/hero";
import Services from "../components/services";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import Articles from "../components/articles";
import Layout from "../components/layout";
import "../styles/css/index.css";

export default function IndexPage() {
  return (
    <Layout home={true}>
      <Hero />
      <Services />
      <Experiences />
      <Projects />
      <Articles />
    </Layout>
  );
}
