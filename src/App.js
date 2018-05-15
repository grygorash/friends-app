import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { addFriend, removeFriend, fetchUsers, searchUser } from "./actions/index";
import { getUsers, getSearch } from "./selectors";
import UserList from "./components/UserList/index";
import Header from "./components/Header/index";
import SearchList from "./components/SearchList/index";
import FriendList from "./components/FriendList/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleChangeInput = value => {
    this.setState({
      value: value
    });
  };

  handleSearchUser = e => {
    e.preventDefault();
    this.props.searchUser(this.state.value);
    this.setState({
      value: ""
    });
  };

  handleAddFriend = id => {
    this.props.addFriend(id);
  };

  handleRemoveFriend = id => {
    this.props.removeFriend(id);
  };

  render() {
    const {users} = this.props;
    const {value} = this.state;

    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/"
                 render={() => {
                   return (
                     <UserList users={users}
                               onAddFriend={this.handleAddFriend}
                               onRemoveFriend={this.handleRemoveFriend} />
                   );
                 }}
          />
          <Route path="/search"
                 render={() => {
                   return (
                     <SearchList value={value}
                                 onInputChange={this.handleChangeInput}
                                 onSearchUser={this.handleSearchUser}
                     />
                   );
                 }}
          />
          <Route exact path="/my-friends"
                 render={() => {
                   return (
                     <FriendList users={users}
                                 onRemoveFriend={this.handleRemoveFriend} />
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
  search: getSearch(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch),
  addFriend: bindActionCreators(addFriend, dispatch),
  removeFriend: bindActionCreators(removeFriend, dispatch),
  searchUser: bindActionCreators(searchUser, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));