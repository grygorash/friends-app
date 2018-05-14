import React, { Component } from "react";
import { ListGroupItem, Button } from "reactstrap";

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const {isFriend} = this.state;
    const {onAddFriend, onRemoveFriend, ...user} = this.props;

    return (
      <ListGroupItem className="text-center">
        <img src={user.picture.large} alt="user" />
        <br />
        {user.name.first} {user.name.last}
        <br />
        {!isFriend ? (
          <Button color="primary"
                  onClick={() => {
                    this.setState({isFriend: true});
                    onAddFriend(user.login.username, user.name.first, user.name.last, user.picture.medium);
                  }}>
            Add to Friend List
          </Button>
        ) : (
          <Button color="danger" onClick={() => {
            this.setState({isFriend: false});
            onRemoveFriend(user.login.username);
          }}>Delete from Friend List</Button>
        )}
      </ListGroupItem>
    );
  }
}

export default UserItem;