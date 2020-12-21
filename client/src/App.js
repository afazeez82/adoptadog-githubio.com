import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer} from "./components" 
import { Home, About, Adopt, Blog, Donate, Volunteer, DogProfile } from "./views";

//auth
//import ProtectedRoute from './auth/protectedRoute';
import { StoreProvider } from "./utils/GlobalState";

//Redux
// import { Provider } from "react-redux";
// import store from './store';

// import DogScreen from "./components/dogscreen";

function App() {
  return (
 //   <div className="App">
      <StoreProvider >
          <Router>
            <Navigation />
            {/* <Alert /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/adopt" component={Adopt} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/donate" component={Donate} />
              <Route exact path="/getInvolved" component={Volunteer} />
              <Route exact path="/dog/:id" component={DogProfile} />
            </Switch>
            <Footer />
          </Router>
      </StoreProvider>
  //  </div>
  );
}

export default App;


