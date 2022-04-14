import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import Avatars from './avatars';
import PlayerSelect from './playerSelect';
import Footer from './Footer';

const Main = () => {
  return (
    <Router>
      <Navbar />
      <main className="container-md">
        <Routes>
          {/* <Route exact path="/" component={Landing} />*/}
          <Route path="/" element={<Avatars />} />
          <Route exact path="/avatars" element={<Avatars />} />
          <Route exact path="/player-select" element={<PlayerSelect />} />
          {/* <Route exact path="/game" component={Game} />  */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Main;
