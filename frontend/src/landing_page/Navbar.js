import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
  
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
          <a class="navbar-brand" href="#">
          <img src='media/images/logo.svg' style={{width:"30%"}} alt=""></img>
          </a>
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/signup" aria-current="page" href="#">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"  to="/about" href="#">
                  About
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" href="#" to="products">
                  products
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" href="#" to="pricing">
                  pricing
                </Link>
              </li>
                 <li class="nav-item">
                <Link class="nav-link active" href="#" to="support">
                  support
                </Link>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
