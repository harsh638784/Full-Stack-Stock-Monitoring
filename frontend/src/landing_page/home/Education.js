import React from 'react';
function Education() {
    return (  
        <div className='container p-4'>
        <div className='row p-4'>
             <div className='col-6'>
                <div className='row'>
               <img src='media/images/education.svg' style={{width:'90%'}} alt='' ></img>
                </div>
            </div>

           
            <div className='col-6 p-4 mb-5'>
                <h1 className='fs-2 text-muted'>Free and open market education</h1>
                <br></br>
                <p className=' text-muted '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                 <br></br>
                 <br></br>
                <a href='' style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-right"></i> </a>
                 <br></br>
                <p className=' text-muted  '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                 <br></br>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>
            </div>
            
           
        </div>
       </div>
    );
}

export default Education;