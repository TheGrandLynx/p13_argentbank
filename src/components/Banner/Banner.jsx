import React from "react";
function Banner() {
  return (
    <div className="banner">
      <section className="introduction">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="banner__subtitle">No fees.</p>
        <p className="banner__subtitle">No minimum deposit.</p>
        <p className="banner__subtitle">High interest rates.</p>
        <p className="banner__text">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
}

export default Banner;
