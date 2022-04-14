import React from 'react';

const Avatars = () => {
  return (
    <div>
      <div className="row row-start-button">
        <div className="col-sm-4"></div>
        <div
          className="col-sm-4 d-flex justify-content-center"
          id="reset-buttons"
        >
          <button
            type="button"
            id="start-button"
            className="btn btn-outline-primary disabled btn-lg"
          >
            Choose an Avatar to Start
          </button>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
};

export default Avatars;
