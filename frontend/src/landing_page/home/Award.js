import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;

// import React from 'react';

// function Award() {
//     return ( 
//          <div className="container p-5">
//           <div className='row p-5'>

//           <div className='col-6 p-5'>
//            <img src='media/images/largestBroker.svg' alt='largestBroker'/> 
//           </div>

//           <div className='col-6 p-5 mt-3'>
//           <h1>Largest stock broker in India</h1>
//           <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
//           <div className='row'>
//             <div className='col-6'>
//             <ul> 
//             <li><p>Futures and Options</p></li>
//             <li><p>Commodity derivatives</p></li>
//             <li><p>Currency derivatives</p></li>
//             </ul> 
//             </div>
//             <div className='col-6'>
//             <ul>
//             <li><p>Stocks & IPOs</p></li>
//             <li><p>Direct mutual funds</p></li>
//             <li><p>Bonds and Gov.</p></li>
//             </ul>
//             </div>
//             </div>
//             <img src='media/images/pressLogos.png' alt="" style={{width:"90%"}}/>
//           </div>
           
//           </div>
//          </div>
//      );
// }

// export default Award;