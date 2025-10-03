import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container border-bottom mt-5'>
            <div className='text-center mt-5 p-3'>

            <h1>Zerodha Products</h1>
            <h3 className='text-muted fs-4 mt-3'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='mb-3 mt-3'>Check out our
<Link style={{textDecoration:"none"}}>investment offering <i class="fa-solid fa-arrow-right"></i> </Link></p>
            </div>
        </div>
     );
}

export default Hero;