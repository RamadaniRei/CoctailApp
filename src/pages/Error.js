import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>Something went wrong!</h1>
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default Error;
