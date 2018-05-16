import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import "./FriendList.css";


const FriendList = props => {
  const {users, onRemoveFriend} = props;
  return (
    <Fragment>
      {users.length === 0 ? (
        <div>no friends</div>
      ) : (
        <Fragment>
          <p>You have {users.length} friends</p>
          <ListGroup className="friend-list">
            {users.map((friend, index) => <ListGroupItem key={index} id={friend.phone}>
                <img src={friend.picture.medium} alt="" />
                <span>
                {friend.name.first} {friend.name.last}
                </span>
                <Button color="danger" onClick={() => onRemoveFriend(friend)}>Remove</Button>
              </ListGroupItem>
            )
            }
          </ListGroup>
        </Fragment>
      )}
    </Fragment>
  );
};

export default FriendList;