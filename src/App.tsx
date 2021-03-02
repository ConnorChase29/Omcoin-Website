import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturesPage from './FeaturesPage';
import Footer from './Footer';
import NavBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <FeaturesPage/>
      <Footer/>
    </div>
  );
}

export default App;
