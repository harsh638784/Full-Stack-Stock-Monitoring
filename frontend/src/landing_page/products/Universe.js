import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row p-5 text-muted text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5">
          <img src="media/images/zerodhafundhouse(1).png" style={{width:"40%"}} alt="" />
          
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img src="media/images/streak-logo.png" style={{width:"40%"}} alt="" />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 mt-5">
          <img src="media/images/sensibull-logo.svg" style={{width:"50%"}} alt="" />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img src="media/images/smallcaseLogo.png" style={{width:"50%"}} alt="" />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 mt-5">
          <img src="media/images/tijori.svg" style={{width:"30%"}} alt="" />
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img src="media/images/dittoLogo.png" style={{width:"30%"}} alt="" />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          SignUp now
        </button>
      </div>
   
    </div>
  );
}

export default Universe;
