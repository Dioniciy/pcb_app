import React from "react";
import error from "../img/not-found.jpeg";
import "./Not_Found.scss";

export default function Not_Found() {
  return (
    <section className="not-found">
      <a href="/" className="btn btn--large">
        Back to home page
      </a>
      <div className="not-found__bg">
        <img src={error} alt="error" />
      </div>
    </section>
  );
}