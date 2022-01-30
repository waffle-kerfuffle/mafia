import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";

import Helmet from "react-helmet";
import React from "react";
import { Login } from "../Login/Login";
import { SignUp } from "../Login/SignUp";
import { Index } from "../Index";
import { Menu } from "../Menu";
import { Allcurrency } from "../Allcurrency";
import { CurrencyDetail } from "../CurrencyDetail";
 

export const Layout = () => {
  return (
    <BrowserRouter>
     <Helmet>
        <title>Finance</title>
        <meta name="discription" content="Crypto-Currency" />
      </Helmet>
      
    <Menu/>
      <Routes>
      

        <Route path="/" element={<Index/>} />
        <Route path="login" element={<Login />} />
        <Route path="Allcurrency" element={<Allcurrency />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="CurrencyDetail/:id" element={<CurrencyDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
