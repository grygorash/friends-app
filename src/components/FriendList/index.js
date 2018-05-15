import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";


class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const {friendList, onRemoveFriend} = this.props;

    return (
        <ListGroup>
          {/*{friendList.length >= 1 ? (friendList.map((friend, index) => {*/}
            {/*return (*/}
              {/*<ListGroupItem key={index} id={friend.id}>*/}
                {/*<img src={friend.userPic} alt="" />*/}
                {/*{friend.firstName} {friend.lastName}*/}
                {/*<Button color="danger" onClick={() => onRemoveFriend(friend.id)}>Delete</Button>*/}
              {/*</ListGroupItem>*/}
            {/*);*/}
          {/*})) : (*/}
            {/*<div>no friends</div>*/}
          {/*)}*/}
        </ListGroup>
    );
  }
}

export default FriendList;