import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import Loader from "../Loader";
import Index from "../Pagination/index";

function UserList(props) {
  const {onRemoveFriend, onAddFriend, users, currentPage, itemsPerPage, page} = props;
  const startOffset = (currentPage - 1) * itemsPerPage;
  let startCount = 0;

  return (
    <Fragment>
      {users.length === 0 ? (
        <Loader />
      ) : (
        <div className="user-list">
          <p>Total users: {users.length}</p>
          <ListGroup>
            {users.map((user, index) => {
              return index >= startOffset && startCount < itemsPerPage ? ++startCount && (
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
                </ListGroupItem>
              ) : (
                null
              );
            })}
          </ListGroup>
        </div>
      )}
      {!users.length ? null : (
        <Index
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          page={page}
          users={users}
        />
      )}
    </Fragment>
  );
}

export default UserList;