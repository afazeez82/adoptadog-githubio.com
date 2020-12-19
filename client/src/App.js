import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Adopt, Blog, Donate, Volunteer } from "./components";
import DogScreen from "./components/dogscreen";
// import Sidebar from "./components/";
import DogProfile from "./views/DogProfileSpan"
// import DogScreen from "./components/dogscreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/adopt" exact component={() => <Adopt />} />
          <Route path="/DogProfile" exact component={() => <DogProfile />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/donate" exact component={() => <Donate />} />
          <Route path="/getInvolved" exact component={() => <Volunteer />} />
          <Route path="/dog/:id" component={DogScreen} />
          <Route path="/dog/:id" component={DogProfile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;