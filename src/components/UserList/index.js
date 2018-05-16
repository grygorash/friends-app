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
      {users.length === 0 ? (
        <Loader />
      ) : (
        <div className="user-list">
          <p>Total users: {users.length}</p>
          <ListGroup>
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
        </div>
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