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
import Login from "./auth/Login";

function App() {
  return (
    <>
      <div className="bg-yellow-400">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/produk">
            <Product />
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
        </Switch>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
