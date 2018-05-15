import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";


class UserItem extends Component {
  render() {
    const {onAddFriend, onRemoveFriend, ...user} = this.props;

    return (
      <ListGroupItem className="text-center">
        <img src={user.picture.large} alt="user" />
        <br />
        {user.name.first} {user.name.last}
        <br />
        <Button color="primary" onClick={() => onAddFriend(user.phone)}>add</Button>
      </ListGroupItem>
    );
  }
}

export default UserItem;