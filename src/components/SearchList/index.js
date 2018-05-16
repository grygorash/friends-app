import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button, Input } from "reactstrap";

import "./SearchList.css";
import Loader from "../Loader";
import PaginationContainer from "../PaginationContainer/PaginationContainer";

const SearchList = (props) => {
  const {value, onInputChange, users, onAddFriend, onRemoveFriend, currentPage, itemsPerPage, page} = props;
  const startOffset = (currentPage - 1) * itemsPerPage;
  let startCount = 0;
  return (
    <Fragment>
      <div className="search-field">
        <Input type="text"
               placeholder="Please, enter name or surname of user"
               value={value}
               onChange={({target}) => onInputChange(target.value)}
        />
      </div>
      {users.length === 0 ? (<Loader />) : (
        <ListGroup className="search-list">
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
};

export default SearchList;