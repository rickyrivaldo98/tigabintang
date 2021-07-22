import { Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Admin from "./pages/Admin";
import Login from "./pages/auth/Login";
import PublicRoute from "./pages/utils/PublicRoute";
import PrivateRoute from "./pages/utils/PrivateRoute";
import Detail from "./pages/Detail";
import ScrollToTop from "./components/ScrollToTop";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <ScrollToTop />
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
        <div className="bg-yellow-400">
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/produk">
            <Product />
          </Route>
          <Route exact path="/produk/:id">
            <Detail />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </div>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
