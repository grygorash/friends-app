import React from "react";
import { ListGroup } from "reactstrap";

import Loader from "../Loader";
import UserItem from "./UserItem/index";
import "./UserList.css";

function UserList(props) {
  const {onRemoveFriend, onAddFriend, users} = props;
  console.log("--->111111", users);
  return (
    users.length === 0 ? (<Loader />) : (<ListGroup className="user-list">
      {users.map((user, index) => {

        return (
          <UserItem key={index}
                    {...user}
                    onAddFriend={onAddFriend}
                    onRemoveFriend={onRemoveFriend}
          />
        );
      })}
    </ListGroup>)
  );
}

export default UserList;