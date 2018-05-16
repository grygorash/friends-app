import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button, Input } from "reactstrap";

import "./SearchList.css";
import Loader from "../Loader";

const SearchList = (props) => {
  const {value, onInputChange, users, onAddFriend, onRemoveFriend} = props;
  return (
    <Fragment>
      <div className="search-field">
        <Input type="text"
               placeholder="Please, enter name or surname of user"
               value={value}
               onChange={({target}) => onInputChange(target.value)}
        />
      </div>
      {users.length === 0 ? (<Loader />) : (
        <ListGroup className="search-list">
          {users.map((user, index) =>
            <ListGroupItem key={index} className="text-center">
              <img src={user.picture.large} alt="user" />
              <p>
                {user.name.first} {user.name.last}
              </p>
              {!user.isFriend ? (
                <Button color="primary" onClick={() => onAddFriend(user)}>add</Button>
              ) : (
                <Button color="danger" onClick={() => onRemoveFriend(user)}>remove</Button>
              )}
            </ListGroupItem>)}
        </ListGroup>
      )}
    </Fragment>
  );
};

export default SearchList;