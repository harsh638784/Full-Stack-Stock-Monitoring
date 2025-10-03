import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="faq-section">

      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row supportHeader" style={{ marginTop: "-50px" }}>
        <div className="col-7 support-box">
          <h2 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h2><br></br>
          <input placeholder="Eg. how do i active" id=""></input>
          <a href="">Track account opening </a>
          <a href="">Track segment activation </a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-5 row p-5">
          <h3>Featured</h3>
          <ol>

          <li>
            <a href="" >Surveillance measure on scrips - June 2025</a>
          </li>
          <li>
            <a href="">Rights Entitlements listing in June 2025</a>
          </li>
          </ol>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
