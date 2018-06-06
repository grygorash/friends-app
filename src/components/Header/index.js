import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Header = () => {
  return (
    <div className="menu">
      <NavLink
        exact to="/"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "60px"}}>
        Home
      </NavLink>
      <NavLink
        to="/search"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "60px"}}>
        Search
      </NavLink>
      <NavLink
        to="/friends"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "60px"}}>
        My Friends
      </NavLink>
      <NavLink
        to="/favourites"
        activeStyle={{backgroundColor: "#007bff", color: "#fff", height: "60px"}}>
        My Favourites
      </NavLink>
    </div>
  );
};

export default Header;