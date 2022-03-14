import React, { useEffect ,useState} from "react";
import logo from "../img/logo.png";
import Swal from 'sweetalert2'
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";

export const Menu = () => {
  
  return (
    <div>
      <header className="header-section clearfix">
        <div className="container-fluid">
          <a href="index.html" className="site-logo">
            <img src={logo} alt="" />
          </a>
          <div className="responsive-bar">
            <i className="fa fa-bars"></i>
          </div>
          <a href="" className="user">
            <i className="fa fa-user"></i>
          </a>
          
                    <NavLink className="site-btn"  to="/signup">ثبت نام </NavLink>

           <NavLink className="site-btn login" to="/login">ورود </NavLink>
         
        
         
          <nav className="main-menu rtl">
            <ul className="menu-list">
              <li>
                <a href="">راهنمای استفاده</a>
              </li>
              <li>
                <a href="">کیف پول</a>
              </li>
              
              <li>
                <a href="">پشتیبانی</a>
              </li>
              <li>
                <a href="">کسب درآمد</a>
              </li>
              <li>
                <a href="">حساب کاربری</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
