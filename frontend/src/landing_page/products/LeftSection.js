import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
     <div className='container'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src={imageURL}  alt=''/>
            </div>
            <div className='col-1'></div>
            <div className='col-5 p-8 mt-5'>
                <h1 className='mt-5'>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3'>
                <a href={tryDemo} style={{textDecoration:"none"}}>tryDemo<i class="fa-solid fa-arrow-right"></i></a> 
                <a href={learnMore} style={{marginLeft:"50px" ,textDecoration:"none"}}>learnMore<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='mt-5'>
                      <a href={googlePlay} style={{textDecoration:"none"}}><img src='media/images/googlePlayBadge.svg' alt=''/></a>
                <a href={appStore} style={{textDecoration:"none"}}><img src='media/images/appstoreBadge.svg' alt=''></img></a>
            </div>
                </div>
                 
              
        </div>
     </div>
     );
}

export default LeftSection;