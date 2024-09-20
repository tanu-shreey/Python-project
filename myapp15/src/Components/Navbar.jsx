
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#222831' }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white ps-5" href="#">Hidden Brand</a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-5">
            <li className="nav-item active pe-5">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item pe-5">
              <a className="nav-link text-white" href="#About">About</a>
            </li>
            <li className="nav-item pe-5">
              <a className="nav-link text-white" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


