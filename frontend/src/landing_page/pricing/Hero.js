import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center border-bottom p-3 mt-5">
        <h1>Charges</h1>
        <p className="text-muted fs-4 mt-3">List of all charges and taxes</p>
      </div>
      <div className="row p-5 mt-5 text-center text-muted">
        <div className="col-4 p-3">
          <img src="media/images/pricing-eq.svg" style={{width:"70%"}} alt="" />
          <h2 className="f-3">Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/other-trades.svg" style={{width:"70%"}} alt="" />
          <h2 className="f-3">Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing-eq.svg" style={{width:"70%"}} alt="" />
          <h2 className="f-3">Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.All direct mutual fund investments are
            absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
