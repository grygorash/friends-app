import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { withRouter } from "react-router-dom";

import Loader from "../Loader";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.props.onFindUser(this.props.match.params.id);
  }

  componentDidUpdate() {
    localStorage.setItem("users", JSON.stringify(this.props.users));
    localStorage.setItem("user", JSON.stringify(this.props.user));
  }

  render() {
    const {user, loaded, onAddFriend, onRemoveFriend, onAddToFaveFriend, onRemoveToFaveFriend} = this.props;

    return (
      <Fragment>
        {loaded ? (
          <div>
            <Container className="user">
              <Row>
                <Col md="6">
                  <img src={user[0].picture.large} alt="" />
                  {!user[0].isFriend ? (
                    <Button
                      style={{marginBottom: "10px"}}
                      color="primary"
                      onClick={() => onAddFriend(user)}>
                      Add To Friend List
                    </Button>
                  ) : (
                    <Button
                      style={{marginBottom: "10px"}}
                      color="danger"
                      onClick={() => onRemoveFriend(user)}>
                      Remove From Friend List
                    </Button>
                  )}
                  {!user[0].isFaveFriend ? (
                    <Button
                      color="success"
                      onClick={() => onAddToFaveFriend(user)}>
                      Add To Favourites
                    </Button>
                  ) : (
                    <Button
                      color="warning"
                      onClick={() => onRemoveToFaveFriend(user)}>
                      Remove From Favourites
                    </Button>
                  )}
                </Col>
                <Col md="6">

                </Col>
              </Row>
            </Container>
          </div>
        ) : <Loader />}

      </Fragment>
    );
  }
}

export default withRouter(User);

