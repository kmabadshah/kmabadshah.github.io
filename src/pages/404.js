import React from "react";
import Layout from "../components/layout";

export default function Error() {
  return (
    <Layout>
      <div className="container-xl pb-5 justify-content-center d-flex flex-grow-1">
        <h1 className="text-center m-auto" style={{ color: "#2caeba" }}>
          Sorry, I think you've misspelled the url.
        </h1>
      </div>
    </Layout>
  );
}
