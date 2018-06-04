import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import Loader from "../Loader";


const FriendList = props => {
  const {users, loaded, onRemoveToFaveFriend} = props;
  return (
    <Fragment>
      {loaded ? (
        <div className="friend-list">
          <p>{users.length === 1 ? `You have ${users.length} favourite` : users.length > 1 ? `You have ${users.length} favourites` : "No favourites"}</p>
          <ListGroup>
            {users.map((friend, index) =>
              <ListGroupItem
                key={index}
                id={friend.phone}>
                <img
                  src={friend.picture.medium}
                  alt="user-pic" />
                <span>
                {friend.name.first} {friend.name.last}
                </span>
                <Button
                  color="warning"
                  onClick={() => onRemoveToFaveFriend(friend)}>
                  Remove From Favourites
                </Button>
              </ListGroupItem>
            )}
          </ListGroup>
        </div>
      ) : <Loader />}
    </Fragment>
  );
};

export default FriendList;