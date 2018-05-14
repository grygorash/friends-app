import React, { Component } from "react";
import { ListGroup } from "reactstrap";

import UserItem from "./UserItem/index";
import "./UserList.css";

class UserList extends Component {


  render() {
    const {onRemoveFriend, onAddFriend, userList, friendList} = this.props;

    return (
      <ListGroup className="user-list">
        {userList.results.map((user, index) => {
          return (
            <UserItem key={index}
                      id={user.login.username}
                      {...user}
                      onAddFriend={onAddFriend}
                      onRemoveFriend={onRemoveFriend}
            />
          );
        })}
      </ListGroup>
    );
  }
}

export default UserList;