import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/partial/Navbar";
import Footer from "./components/partial/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Policy from "./components/Policy";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path='/policy' component={Policy}/>
          <Route path="/booking" component={Booking} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
