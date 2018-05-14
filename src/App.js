import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import UserList from "./components/UserList/index";
import Header from "./components/Header/index";
import SearchList from "./components/SearchList/index";
import FriendList from "./components/FriendList/index";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/search" component={SearchList} />
          <Route exact path="/my-friends" component={FriendList} />
        </Switch>
      </Container>
    );
  }
}

export default App;