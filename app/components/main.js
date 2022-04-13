import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="container-md">
        {/* <Route exact path="/" component={Landing} />
        <Route exact path="/options" component={Avatars} />
        <Route exact path="/game" component={Game} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
