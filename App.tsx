import React from 'react';
import './CSS/App.css';
import FeaturesPage from './FeaturesPage';
import TermsOfService from './TermsOfService';
import Footer from './Footer';
import NavBar from './NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className = "App">
    <React.Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path = "/" component = {FeaturesPage}/>
          <Route path = "/termsOfService" component = {TermsOfService}/>
        </Switch>
      </Router>
      <Footer/>
    </React.Fragment>
    </div>
  );
}

export default App;
