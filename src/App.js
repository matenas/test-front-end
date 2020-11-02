import React from 'react';
import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline'
import IosMailOutline from 'react-ionicons/lib/IosMailOutline'
import IosCard from 'react-ionicons/lib/IosCard'
import IosAppsOutline from 'react-ionicons/lib/IosAppsOutline'
import IosExitOutline from 'react-ionicons/lib/IosExitOutline'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Hotels from "./views/Hotels";
import Notifications from "./views/Notifications";
import Payments from "./views/Payments";
import Configuration from "./views/Configuration";
import Search from "./views/Search";

const App = () => {
  
  return (
   
    <>
      <div className="container">
          <Router>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/hotels" component={Hotels} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/payments" component={Payments} />
                <Route exact path="/configuration" component={Configuration} />
                <Route exact path="/search" component={Search} />
              </Switch>
          </Router>
      </div>     
    </>
  );
}

export default App;
