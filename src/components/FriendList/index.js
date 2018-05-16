import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import "./FriendList.css";
// import Loader from "../Loader";

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    // this.getFriendList();
  }

  // getFriendList = () => {
  //   let friendList = [];
  //   this.props.users.map(friend => {
  //     if (friend.isFriend) {
  //       friendList.push(friend);
  //       return friendList;
  //     }
  //   });
  // };

  render() {
    // let friendList = this.getFriendList();
    const {users, onRemoveFriend} = this.props;
    return (
      // friendList.length === 0 ? (<Loader />) : (<div>ok</div>)

      <ListGroup className="friend-list">
        {users.map((friend, index) => {
          return friend.isFriend ? (
            <ListGroupItem key={index} id={friend.phone}>
              <img src={friend.picture.medium} alt="" />
              <span>
                {friend.name.first} {friend.name.last}
                </span>
              <Button color="danger" onClick={() => onRemoveFriend(friend.phone)}>Delete</Button>
            </ListGroupItem>
          ) : (
            null
          );
        })}
      </ListGroup>
    );
  }
}

export default FriendList;