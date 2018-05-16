import React, { Fragment } from "react";
import { ListGroup } from "reactstrap";

import Loader from "../Loader";
import UserItem from "./UserItem/index";
import "./UserList.css";
import PaginationContainer from "../PaginationContainer/PaginationContainer";

function UserList(props) {
  const {onRemoveFriend, onAddFriend, users, currentPage, itemsPerPage, page} = props;
  const startOffset = (currentPage - 1) * itemsPerPage;
  let startCount = 0;

  return (
    <Fragment>
      <p>Total users: {users.length}</p>
      {users.length === 0 ? (
        <Loader />
      ) : (
        <ListGroup className="user-list">
          {users.map((user, index) => {
            return index >= startOffset && startCount < itemsPerPage ? ++startCount && (
              <UserItem
                key={index}
                {...user}
                onAddFriend={onAddFriend}
                onRemoveFriend={onRemoveFriend}
              />
            ) : (
              null
            );
          })}
        </ListGroup>
      )}
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
}

export default UserList;