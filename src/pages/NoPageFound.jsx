import React from 'react';
import './NoPageFound.css'; 
import { Link } from 'react-router-dom';

const NoPagesFound = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="/assets/images/404.png" alt="error" />
                <h3>Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed, its name
                  changed, or it is temporarily unavailable.
                </p>
                <Link to="/" className="default-btn-one">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPagesFound;
