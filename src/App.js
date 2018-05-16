import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { addFriend, removeFriend, fetchUsers, searchUser } from "./actions/index";
import { getUsers, getSearchValue, getSearchedUsers, getFriends } from "./selectors";
import UserList from "./components/UserList/index";
import Header from "./components/Header/index";
import SearchList from "./components/SearchList/index";
import FriendList from "./components/FriendList/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 8
    };
  };

  componentDidMount() {
    this.props.fetchUsers();
    const friends = JSON.parse(localStorage.getItem("friends"));
    // console.log(friends);
  }

  componentDidUpdate() {
    localStorage.setItem("friends", JSON.stringify(this.props.friends));
  }

  handleSearchUser = value => {
    this.props.searchUser(value);
  };

  handleAddFriend = user => {
    this.props.addFriend(user);
  };

  handleRemoveFriend = user => {
    this.props.removeFriend(user);
  };

  page = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {

    const {users, searchedUsers, searchValue, friends} = this.props;
    const {itemsPerPage, currentPage} = this.state;
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact
                 path="/"
                 render={() => {
                   return (
                     <UserList
                       users={users}
                       currentPage={currentPage}
                       itemsPerPage={itemsPerPage}
                       onAddFriend={this.handleAddFriend}
                       onRemoveFriend={this.handleRemoveFriend}
                       page={this.page}
                     />
                   );
                 }}
          />
          <Route path="/search"
                 render={() =>
                   <SearchList
                     value={searchValue}
                     currentPage={currentPage}
                     itemsPerPage={itemsPerPage}
                     users={searchedUsers}
                     onInputChange={this.handleSearchUser}
                     onAddFriend={this.handleAddFriend}
                     onRemoveFriend={this.handleRemoveFriend}
                     page={this.page}
                   />
                 }
          />
          <Route exact path="/my-friends"
                 render={() => {
                   return (
                     <FriendList
                       users={friends}
                       currentPage={currentPage}
                       itemsPerPage={itemsPerPage}
                       onRemoveFriend={this.handleRemoveFriend}
                       page={this.page}
                     />
                   );
                 }}
          />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
  friends: getFriends(state),
  searchValue: getSearchValue(state),
  searchedUsers: getSearchedUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch),
  addFriend: bindActionCreators(addFriend, dispatch),
  removeFriend: bindActionCreators(removeFriend, dispatch),
  searchUser: bindActionCreators(searchUser, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));