import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { history } from "./helpers";
import LandingPage from "./pages/LandingPage";
import store from "./store";
import UserDetailsPage from "./pages/UserDetailsPage";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div className="App container">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/users/:username" component={UserDetailsPage} />
          <Route exact path="/users/:username/orgs" component={UserDetailsPage} />
          <Route exact path="/users/:username/repos" component={UserDetailsPage} />
        </div>
      </Provider>
    </Router>
  );
};

export default App;
