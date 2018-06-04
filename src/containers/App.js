import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container } from "reactstrap";

import { addFriend, removeFriend, fetchUsers, searchUser } from "../actions/index";
import { getUsers, getSearchValue, getLoadingStatus, getSearchedUsers, getFriends, getFaveFriends } from "../selectors";
import UserList from "../components/UserList/index";
import Header from "../components/Header/index";
import SearchList from "../components/SearchList/index";
import FriendList from "../components/FriendList/index";
import { addFaveFriend, removeFaveFriend } from "../actions";
import FavouritesList from "../components/FavouritesList/FavouritesList";

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

  handleAddFaveFriend = user => {
    this.props.addFaveFriend(user);
  };

  handleRemoveFriend = user => {
    this.props.removeFriend(user);
  };

  handleRemoveFaveFriend = user => {
    this.props.removeFaveFriend(user);
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
    const {users, searchedUsers, searchValue, friends, loaded, faveFriends} = this.props;
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
                       onAddToFaveFriend={this.handleAddFaveFriend}
                       onRemoveToFaveFriend={this.handleRemoveFaveFriend}
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
                     onAddToFaveFriend={this.handleAddFaveFriend}
                     onRemoveToFaveFriend={this.handleRemoveFaveFriend}
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
                       onAddToFaveFriend={this.handleAddFaveFriend}
                       onRemoveToFaveFriend={this.handleRemoveFaveFriend}
                     />
                   );
                 }}
          />
          <Route path="/favourites"
                 render={() => {
                   return (
                     <FavouritesList
                       loaded={loaded}
                       users={faveFriends}
                       onRemoveToFaveFriend={this.handleRemoveFaveFriend}
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
  faveFriends: getFaveFriends(state),
  searchValue: getSearchValue(state),
  searchedUsers: getSearchedUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch),
  addFriend: bindActionCreators(addFriend, dispatch),
  addFaveFriend: bindActionCreators(addFaveFriend, dispatch),
  removeFriend: bindActionCreators(removeFriend, dispatch),
  removeFaveFriend: bindActionCreators(removeFaveFriend, dispatch),
  searchUser: bindActionCreators(searchUser, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));