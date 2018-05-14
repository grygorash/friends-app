import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";

import { addFriend, removeFriend } from "./actions/index";
import Loader from "./components/Loader/index";
import UserList from "./components/UserList/index";
import Header from "./components/Header/index";
import SearchList from "./components/SearchList/index";
import FriendList from "./components/FriendList/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      load: true
    };
  };

  componentDidMount() {
    this.getUserList();
  }

  getUserList = () => {
    if (!this.state.load) {
      this.setState({load: true});
    }
    axios({
      method: "get",
      url: "https://randomuser.me/api/?results=10&seed=abc",
      timeout: 1000
    })
      .then((response) => {
        this.setState({
          userList: response.data,
          friendList: response.data.results,
          load: false
        });
        if (this.state.errorLoad) {
          this.setState({errorLoad: false});
        }
      })
      .catch((error) => {
        this.setState({
          load: false,
          errorLoad: true
        });
        console.log(error);
      });
  };

  handleAddFriend = (id, firstName, lastName, userPic) => {
    this.props.addFriend(id, firstName, lastName, userPic);
  };

  handleRemoveFriend = (id) => {
    this.props.removeFriend(id);
  };

  render() {
    const {load, userList} = this.state;
    const {friendList} = this.props;

    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/"
                 render={() => {
                   return (
                     <Fragment>
                       {load ? <Loader /> : <UserList userList={userList}
                                                      friendList={friendList}
                                                      onAddFriend={this.handleAddFriend}
                                                      onRemoveFriend={this.handleRemoveFriend} />}
                     </Fragment>
                   );
                 }}
          />
          <Route path="/search" component={SearchList} />
          <Route exact path="/my-friends"
                 render={() => {
                   return (
                     <Fragment>
                       {load ? <Loader /> : <FriendList friendList={friendList}
                                                        onRemoveFriend={this.handleRemoveFriend} />}
                     </Fragment>
                   );
                 }}
          />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friendList: state.friendList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFriend: bindActionCreators(addFriend, dispatch),
    removeFriend: bindActionCreators(removeFriend, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));