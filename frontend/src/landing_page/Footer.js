import React from "react";
import "../../src/index.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo and copyright */}
          <div className="col-md-3 p-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "30%" }}
            />
            <p className="mt-3 text-muted small">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-md-9 p-4">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3">
                <h5>Account</h5>
                <ul className="list-unstyled small">
                  <li>
                    <a href="#">Open demat account</a>
                  </li>
                  <li>
                    <a href="#">Minor demat account</a>
                  </li>
                  <li>
                    <a href="#">NRI demat account</a>
                  </li>
                  <li>
                    <a href="#">Commodity</a>
                  </li>
                  <li>
                    <a href="#">Dematerialisation</a>
                  </li>
                  <li>
                    <a href="#">Fund transfer</a>
                  </li>
                  <li>
                    <a href="#">Referral program</a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-md-3">
                <h5>Support</h5>
                <ul className="list-unstyled small">
                  <li>
                    <a href="#">Support portal</a>
                  </li>
                  <li>
                    <a href="#">How to file a complaint?</a>
                  </li>
                  <li>
                    <a href="#">Bulletin</a>
                  </li>
                  <li>
                    <a href="#">Circular</a>
                  </li>
                  <li>
                    <a href="#">Z-Connect blog</a>
                  </li>
                  <li>
                    <a href="#">Downloads</a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="col-md-3">
                <h5>Company</h5>
                <ul className="list-unstyled small">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Philosophy</a>
                  </li>
                  <li>
                    <a href="#">Press & media</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Zerodha Cares (CSR)</a>
                  </li>
                  <li>
                    <a href="#">Zerodha.tech</a>
                  </li>
                  <li>
                    <a href="#">Open source</a>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="col-md-3">
                <h5>Quick links</h5>
                <ul className="list-unstyled small">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Upcoming IPOs</a>
                  </li>
                  <li>
                    <a href="#">Market holidays</a>
                  </li>
                  <li>
                    <a href="#">Economic calendar</a>
                  </li>
                  <li>
                    <a href="#">Calculators</a>
                  </li>
                  <li>
                    <a href="#">Markets</a>
                  </li>
                  <li>
                    <a href="#">Sectors</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer disclaimer section */}
        <div className="container" style={{ fontSize: "11px" }}>
          <div className="text-muted p-5">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints: Name, PAN,
              Address, Mobile, E-mail ID.
            </p>
            <p>
              <a href="#" style={{ textDecoration: "none" }}>
                Smart Online Dispute Resolution
              </a>
              <span className="mx-2">|</span>
              <a href="#" style={{ textDecoration: "none" }}>
                Grievances Redressal Mechanism
              </a>
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
