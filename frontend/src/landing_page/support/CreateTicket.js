import React from "react";
function CreateTicket() {
  return (
  <div className="content-container">
   <div className="faq-section faq-content">

    <div className="container support-cards-container">
       < h3 class="text-grey">To create a ticket, select a relevant topic</h3>
      <div className="row between mt-4">
        <div className="col-4 text-muted ticket-section">
          <div class="icon-text card-title"><i class="fas fa-plus-circle"></i> Account Opening</div>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Resident individual</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Minor</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Non Resident Indian (NRI)</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Company, Partnership, HUF and LLP</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Glossary </a>
        </div>
        <div className="col-4 ticket-section">
          <div class="icon-text card-title"><i class="fas fa-user"></i> Your Zerodha Account</div>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Your Profile</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Account modification</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Nomination</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Transfer and conversion of securities</a>
        </div>
        <div className="col-4 ticket-section">
         <div class="icon-text card-title"><i class="fas fa-chart-bar"></i> Kite</div>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>IPO</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Trading FAQs</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Margin Trading Facility (MTF) and Margins</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Charts and orders</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Alerts and Nudges</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>General</a>
        </div>
      </div>


       <div className="row between mt-4">
        <div className="col-4 text-muted ticket-section">
          <div class="icon-text card-title">  <i className="fa-solid fa-bars-staggered me-2"></i>Funds</div>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Add money</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Withdraw money</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Add bank accounts</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Company, Partnership, HUF and LLP</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>eMandates</a>
        </div>
        <div className="col-4 ticket-section">
          <div class="icon-text card-title">  <i className="fa-regular fa-circle-user me-2"></i> Console</div>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Portfolio</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Corporate actions</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Reports</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Profile</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Segments</a>
        </div>
        <div className="col-4 ticket-section">
         <div class="icon-text card-title"><i className="fa-regular fa-clock me-2"></i>Coin</div>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>National Pension Scheme (NPS)</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Features on Coin</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>Payments and Orders</a>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5" }}>General</a>
 
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default CreateTicket;
