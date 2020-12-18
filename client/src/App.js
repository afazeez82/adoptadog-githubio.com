import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Adopt, Blog, Donate, Volunteer, Sidebar } from "./components";
import DogScreen from "./components/dogscreen";
// import Sidebar from "./components/";

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
          <Route path="/dog/:id" component={DogScreen} />
          <Route path="/sidebar" exact component={() => <Sidebar />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;