
import React from "react";
function Brokerage() {
  return (
    <div class="container my-5">
      <h2 class="mb-4 text-center">Zerodha Pricing - Equities</h2>
      <div class="table-responsive">
        <table class="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
                <th></th>
              <th> Equity delivery</th>
              <th>Equity intraday</th>
              <th> F&O - Futures</th>
              <th>F&O - Options</th>
              
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Brokerage</th>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <th scope="row">STT/CTT</th>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td class="text-start">
                <ul class="list-unstyled mb-0">
                  <li>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Transaction charges</th>
              <td>
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173%
                <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.03503% (on premium)
                <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <th scope="row">GST</th>
              <td colspan="4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <th scope="row">SEBI charges</th>
              <td colspan="4">₹10 / crore</td>
            </tr>
            <tr>
              <th scope="row">Stamp charges</th>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
