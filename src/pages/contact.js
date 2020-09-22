import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import Layout from "../components/layout";
import axios from "axios";

export default function Contact() {
  const [keys, setKeys] = useState({});
  const [isLoading, setIsLoading] = useState(undefined);
  const [error, setError] = useState("slkjlksdf");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (keys["Control"] && keys["Enter"]) console.log(keys);
  }, [keys]);
  return (
    <Layout style={{ overflow: "auto" }}>
      <div className="container py-5 px-4 d-flex flex-column align-items-center justify-content-center flex-grow-1 overflow-auto">
        <div
          id="toast"
          className={`${error ? "bg-danger error" : "bg-success success"} ${
            isLoading === false && "load-end"
          } text-light`}
        >
          <p className="p-0 m-0">
            {error
              ? "Something went wrong. Please retry using the correct form of data"
              : "Your message has been sent!"}
          </p>
          <ImCross id="cross" onClick={() => setIsLoading(undefined)} />
        </div>
        <div className="card my-5" id="contact-card">
          <div className="card-body mx-1">
            <h3 id="get-in-touch" className="mb-4">
              Get In Touch
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="name"
                  id="contact-name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="email"
                  id="contact-email"
                  required
                />

                <textarea
                  name="message"
                  className="form-control"
                  id="contact-message"
                  placeholder="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                className="btn-block btn-md mt-4 btn text-uppercase"
                id="contact-submit"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner-border text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "submit here"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );

  function handleSubmit(e) {
    e.persist();
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("https://formspree.io/xgepwjdl", new FormData(e.target))
      .then((data) => {
        setIsLoading(false);
        setError(false);
        e.target.reset();
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }
}
