import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container } from "reactstrap";

import { addFriend, removeFriend, fetchUsers, searchUser } from "../actions/index";
import { getUsers, getSearchValue, getLoadingStatus, getSearchedUsers, getFriends } from "../selectors";
import UserList from "../components/UserList/index";
import Header from "../components/Header/index";
import SearchList from "../components/SearchList/index";
import FriendList from "../components/FriendList/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 12
    };
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate() {
    localStorage.setItem("users", JSON.stringify(this.props.users));
  }

  handleAddFriend = user => {
    this.props.addFriend(user);
  };

  handleRemoveFriend = user => {
    this.props.removeFriend(user);
  };

  handleSearchUser = value => {
    this.props.searchUser(value);
  };

  page = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const {users, searchedUsers, searchValue, friends, loaded} = this.props;
    const {itemsPerPage, currentPage} = this.state;

    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/"
                 render={() => {
                   return (
                     <UserList
                       loaded={loaded}
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
                     loaded={loaded}
                     value={searchValue}
                     users={searchedUsers}
                     onInputChange={this.handleSearchUser}
                     onAddFriend={this.handleAddFriend}
                     onRemoveFriend={this.handleRemoveFriend}
                   />
                 }
          />
          <Route path="/friends"
                 render={() => {
                   return (
                     <FriendList
                       loaded={loaded}
                       users={friends}
                       onRemoveFriend={this.handleRemoveFriend}
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
  loaded: getLoadingStatus(state),
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