import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Alert, Navigation, Footer} from "./components" 
import { Home, About, Adopt, Blog, Donate, Volunteer, DogProfile, AdoptionForm } from "./views";

//auth
import ProtectedRoute from './auth/protectedRoute';

//Redux
import { Provider } from "react-redux";
import store from './store';
// import DogScreen from "./components/dogscreen";

function App() {
  return (
    <div className="App">
      <Provider store={ store} >
        <div>
          <Router>
            <Navigation />
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/adopt" component={Adopt} />
              <Route exact path="/DogProfile" component={DogProfile} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/donate" component={Donate} />
              <Route exact path="/getInvolved" component={Volunteer} />
              <Route exact path="/dog/:id" component={DogProfile} />
              <ProtectedRoute exact path="/adoptionForm" component={AdoptionForm} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </Provider>
    </div>
  );
}

export default App;


