import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import Loader from "../Loader";
import Pagination from "../Pagination/index";

const UserList = props => {
  const {onRemoveFriend, onAddFriend, onAddToFaveFriend, onRemoveToFaveFriend, users, currentPage, itemsPerPage, page, loaded} = props;
  const startOffset = (currentPage - 1) * itemsPerPage;
  let startCount = 0;

  return (
    <Fragment>
      {loaded ? (
        <div className="user-list">
          <p>Total users: {users.length}</p>
          <ListGroup>
            {users.map((user, index) => {
              return index >= startOffset && startCount < itemsPerPage ? ++startCount && (
                <ListGroupItem
                  key={index}
                  className="text-center">
                  <img
                    src={user.picture.large}
                    alt="user-pic" />
                  <p>
                    {user.name.first} {user.name.last}
                  </p>
                  {!user.isFriend ? (
                    <Button
                      style={{marginBottom: "10px"}}
                      color="primary"
                      onClick={() => onAddFriend(user)}>
                      Add To Friend List
                    </Button>
                  ) : (
                    <Button
                      style={{marginBottom: "10px"}}
                      color="danger"
                      onClick={() => onRemoveFriend(user)}>
                      Remove From Friend List
                    </Button>
                  )}
                  {!user.isFaveFriend ? (
                    <Button
                      color="success"
                      onClick={() => onAddToFaveFriend(user)}>
                      Add To Favourites
                    </Button>
                  ) : (
                    <Button
                      color="warning"
                      onClick={() => onRemoveToFaveFriend(user)}>
                      Remove From Favourites
                    </Button>
                  )}
                </ListGroupItem>
              ) : (
                null
              );
            })}
          </ListGroup>
          {users.length <= itemsPerPage ? null : (
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              page={page}
              users={users}
            />
          )}
        </div>
      ) : <Loader />}
    </Fragment>
  );
};

export default UserList;