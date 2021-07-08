import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/admin.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useAlert } from "react-alert";

import Sidebar from "./admin/Sidebar";
import Navbar_admin from "./admin/Navbar_admin";
import Dashboard from "./admin/Dashboard";

const StyledAdmin = styled.div`
  font-family: "Nunito";
`;

const Admin = () => {
  return (
    <>
      <StyledAdmin>
        <Sidebar />
        <div className="relative md:ml-64">
          <Navbar_admin />
          <Dashboard />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/admin/dashboard">{/* <Dashboard /> */}</Route>
              <Route path="/admin/gallery"></Route>
              <Route path="/admin/addgallery"></Route>
            </Switch>
          </div>
        </div>
      </StyledAdmin>
    </>
  );
};

export default Admin;
