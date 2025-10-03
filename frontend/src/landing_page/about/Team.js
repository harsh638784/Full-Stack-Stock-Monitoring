import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row mb-2">
        <h1 className="fs-2 text-center mt-5">People</h1>
      </div>

      <div className="row mb text-muted fs-6">
        <div className="col-6 p-3">
          <img
            src="media/images/nithinKamath.jpg"
            alt="HeroImage"
            className="mb-5"
            style={{borderRadius:"100%", width:"50%"}}
          />
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry..
          </p>
          <br></br>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).{" "}
          </p>
          <br></br>
          <p>Playing basketball is his zen.</p>
          <br></br>
          <p>
            <span>
              <a href="" style={{ textDecoration: "none" }}>
                Connect on Homepage{" "}
              </a>
            </span>
            <span>/</span>
            <span>
              <a href="" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>{" "}
            </span>{" "}
            <span>/</span>{" "}
            <span>
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Twitter
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
