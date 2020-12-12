import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Adopt, Blog, Donate, Volunteer } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/adopt" exact component={() => <Adopt />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/donate" exact component={() => <Donate />} />
          <Route path="/getInvolved" exact component={() => <Volunteer />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;