import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu">
      <NavLink
        exact to="/"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "58px"}}>
        Home
      </NavLink>
      <NavLink
        to="/search"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "58px"}}>
        Search
      </NavLink>
      <NavLink
        to="/friends"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "58px"}}>
        My Friends
      </NavLink>
      <NavLink
        to="/favourites"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "58px"}}>
        My Favourites
      </NavLink>
    </div>
  );
};

export default Header;