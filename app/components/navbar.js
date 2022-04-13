import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light justify-content-evenly row">
      <div className="col-sm-8">
        <h1>
          <span className="sr-only">Rock, Paper, Scissors, Shoot!</span>
          <span aria-hidden="true">
            <img src="img/rock.png" alt="rock" />
            <img src="img/paper.png" alt="paper" />
            <img src="img/scissors.png" alt="scissors" />
            <img src="img/shoot.png" alt="shoot" />
          </span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
