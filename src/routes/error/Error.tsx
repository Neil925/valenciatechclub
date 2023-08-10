import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

function Normal() {
  return (
    <div className="error flex-center-col">
      <Link to="/">
        <h1>
          Go Back <span>Home</span>?
        </h1>
      </Link>
      <p>No page to be found here...</p>
    </div>
  );
}

function Shadow() {
  return (
    <div className="shadow-error flex-center-col">
      <h1>
        We lurk in the darkness and hunt{" "}
        <strong>
          <Link to="/the-eminence-in-shadow">Shadows</Link>
        </strong>
      </h1>
    </div>
  );
}

function Error() {
  return Math.random() > 0.01 ? <Normal /> : <Shadow />;
}

export default Error;
