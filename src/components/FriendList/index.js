import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import Loader from "../Loader";


const FriendList = props => {
  const {users, onRemoveFriend, loaded, onAddToFaveFriend, onRemoveToFaveFriend} = props;

  return (
    <Fragment>
      {loaded ? (
        <div className="friend-list">
          <p>{users.length === 1 ? `You have ${users.length} friend` : users.length > 1 ? `You have ${users.length} friends` : "No friends"}</p>
          <ListGroup>
            {users.map((friend, index) =>
              <ListGroupItem key={index} id={friend.phone}>
                <img src={friend.picture.medium} alt="user-pic" />
                <span>
                {friend.name.first} {friend.name.last}
                </span>
                <Button color="danger"
                        onClick={() => onRemoveFriend(friend)}>
                  Remove
                </Button>
                {friend.isFaveFriend ? (
                  <Button style={{marginLeft: "10px"}}
                          color="warning"
                          onClick={() => onRemoveToFaveFriend(friend)}>
                    Delete From Favourites
                  </Button>
                ) : (
                  <Button style={{marginLeft: "10px"}}
                          color="success"
                          onClick={() => onAddToFaveFriend(friend)}>
                    Add To Favourites
                  </Button>
                )}
              </ListGroupItem>
            )}
          </ListGroup>
        </div>
      ) : <Loader />}
    </Fragment>
  );
};

export default FriendList;