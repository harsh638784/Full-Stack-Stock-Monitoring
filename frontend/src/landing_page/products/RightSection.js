import React from 'react';
 
function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
     <div className='container'>
        <div className='row'>
          <div className='col-1'></div>
            <div className='col-4 p-5 mt-5'>
               <h1 className='text-muted fs-2' style={{marginTop:"160px"}}>{productName}</h1>
                <p>{productDescription}</p>
                <a href={learnMore} style={{textDecoration:"none"}}>{learnMore}<i class="fa-solid fa-arrow-right"></i></a>
              </div>
             

              <div className='col-6 p-5' style={{paddingRight:"50px",marginRight:"50px"}}>
                <img src={imageURL}  alt=''/>
            </div>
                 <div className='col-1'></div>
              
            </div>
        </div>
    
     );
}

export default RightSection;
 