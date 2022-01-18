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

import { Index } from "../Index";
import { Menu } from "../Menu";
 

export const Layout = () => {
  return (
    <BrowserRouter>
     <Helmet>
        <title>Finance</title>
        <meta name="discription" content="Ceypto-Currency" />
      </Helmet>
    <Menu/>
      <Routes>
      
        <Route path="/" element={<Index/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
