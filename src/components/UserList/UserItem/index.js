import React from "react";
import { ListGroupItem, Button } from "reactstrap";

function UserItem(props) {
  const {onAddFriend, onRemoveFriend, ...user} = props;
  return (
    <ListGroupItem className="text-center">
      <img src={user.picture.large} alt="user" />
      <p>
        {user.name.first} {user.name.last}
      </p>
      {!user.isFriend ? (
        <Button color="primary" onClick={() => onAddFriend(user)}>add</Button>
      ) : (
        <Button color="danger" onClick={() => onRemoveFriend(user)}>remove</Button>
      )}
    </ListGroupItem>
  );
}

export default UserItem;