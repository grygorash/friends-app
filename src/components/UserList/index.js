import React, { Component, Fragment } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import Loader from "../Loader/index";
import "./UserList.css"

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      userList: []
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
      url: "https://randomuser.me/api/?results=30&seed=abc",
      timeout: 1000
    })
      .then((response) => {
        setTimeout(() => {
          this.setState({
            userList: response.data,
            load: false
          });
        }, 500);
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

  render() {
    const {load, userList} = this.state;

    return (
      <Fragment>
        {load ? <Loader /> : (
          <ListGroup>
            {userList.results.map((user, index) => {
              return (
                <ListGroupItem key={index} id={index} className="text-center">
                  <img src={user.picture.large} alt="user" />
                  <br />
                  {user.name.first} {user.name.last}
                  <br />
                  <Button color="primary">Add to Friend List</Button>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        )}
      </Fragment>
    );
  }
}

export default UserList;