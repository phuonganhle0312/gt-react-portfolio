import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "../../styles/style.css";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path = "/" component= {Home} />
        <Route exact path = "/contact" component= {Contact} />
        <Route exact path = "/portfolio" component= {Portfolio} />
        <Route component= {NoMatch}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;