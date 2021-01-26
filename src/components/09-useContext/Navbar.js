import React from "react";
import { Link, NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" className="nav-link nav-item"  to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="active"  className="nav-link nav-item" to="/about">
              about
            </NavLink>
            <NavLink exact  activeClassName="active"  className="nav-link nav-item" to="/login">
              Login
            </NavLink>
           
          </div>
        </div>
      </div>
    </nav>
  );
};
