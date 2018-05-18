import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Header = () => {
  return (
    <div className="menu">
      <ListGroup className="main-nav">
        <NavLink exact to="/"><ListGroupItem>Home</ListGroupItem></NavLink>
        <NavLink to="/search"><ListGroupItem>Search</ListGroupItem></NavLink>
        <NavLink to="/friends"><ListGroupItem>My Friends</ListGroupItem></NavLink>
      </ListGroup>
    </div>
  );
};

export default Header;