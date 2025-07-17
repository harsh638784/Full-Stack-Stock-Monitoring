import React,{useState} from "react";
import {Link} from "react-router-dom";
const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

  const handleMenu=(index)=>{
    setSelectedMenu(index);
  };
  const handleProfileClick=()=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const menuClass="menu";
  const activeMenuClass="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>{handleMenu(0)}}>
            <p className={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
             <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>{handleMenu(1)}}>
            <p className={selectedMenu===1 ? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>{handleMenu(2)}}>
            <p className={selectedMenu===2? activeMenuClass:menuClass}>Holding</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>{handleMenu(3)}}>
            <p className={selectedMenu===3 ? activeMenuClass:menuClass}>positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>{handleMenu(4)}}>
            <p className={selectedMenu===4 ? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>{handleMenu(5)}}>
            <p className={selectedMenu===5 ? activeMenuClass:menuClass}>App</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
