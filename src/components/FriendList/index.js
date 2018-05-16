import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import "./FriendList.css";
import PaginationContainer from "../PaginationContainer/PaginationContainer";


const FriendList = props => {
  const {users, onRemoveFriend, currentPage, itemsPerPage, page} = props;
  const startOffset = (currentPage - 1) * itemsPerPage;
  let startCount = 0;

  return (
    <Fragment>
      <p>{users.length === 0 ? `No friends` : `You have ${users.length} friends`}</p>
      <ListGroup className="friend-list">
        {users.map((friend, index) => {
          return index >= startOffset && startCount < itemsPerPage ? ++startCount && (
            <ListGroupItem key={index} id={friend.phone}>
              <img src={friend.picture.medium} alt="" />
              <span>
                {friend.name.first} {friend.name.last}
                </span>
              <Button color="danger" onClick={() => onRemoveFriend(friend)}>Remove</Button>
            </ListGroupItem>
          ) : (
            null
          );
        })}
      </ListGroup>
      {!users.length ? null : (
        <PaginationContainer
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          page={page}
          users={users}
        />
      )}
    </Fragment>
  );
};

export default FriendList;