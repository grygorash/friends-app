import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import "./Pagination.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerPage: this.props.itemsPerPage,
      currentPage: this.props.currentPage
    };
  };

  slicePage = (currPage) => {
    if (currPage === 1) {
      return currPage - 1;
    }
    return currPage - 2;
  };

  render() {
    const {itemsPerPage, currentPage} = this.state;
    const {users, page} = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const currentPageNumbers = pageNumbers.slice(this.slicePage(currentPage), currentPage + 1);

    return (
      <Pagination
        size="lg"
        className="justify-content-center"
        style={users.length < 8 ? {display: "none"} : {display: "flex"}}
      >
        <PaginationItem
          className={currentPage === 1 ? "disabled" : ""}
          onClick={() => {
            this.setState({
              currentPage: 1
            });
            page(1);
          }}
        >
          <PaginationLink>⭰</PaginationLink>
        </PaginationItem>
        <PaginationItem
          className={currentPage === 1 ? "disabled" : ""}
          onClick={() => {
            this.setState({
              currentPage: currentPage - 1
            });
            page(currentPage - 1);
          }}
        >
          <PaginationLink>⭠</PaginationLink>
        </PaginationItem>
        <PaginationItem
          className="pointer-none"
          style={currentPage >= 3 ? {display: "inline-block"} : {display: "none"}}
        >
          <PaginationLink>
            ...
          </PaginationLink>
        </PaginationItem>
        {currentPageNumbers.map((number, index) => {
          return (
            <PaginationItem
              key={index}
              className={number === currentPage ? "active" : ""}
            >
              <PaginationLink
                id={number}
                onClick={e => {
                  this.setState({
                    currentPage: Number(e.target.id)
                  });
                  page(Number(e.target.id));
                }}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          );

        })}
        <PaginationItem
          className="pointer-none"
          style={pageNumbers.length < 3 || currentPage === pageNumbers.length || currentPage === pageNumbers.length - 1 ? {display: "none"} : {display: "inline-block"}}
        >
          <PaginationLink>
            ...
          </PaginationLink>
        </PaginationItem>
        <PaginationItem
          className={currentPage === pageNumbers.length ? "disabled" : ""}
          onClick={() => {
            this.setState({
              currentPage: currentPage + 1
            });
            page(currentPage + 1);
          }}
        >
          <PaginationLink>⭢</PaginationLink>
        </PaginationItem>
        <PaginationItem
          className={currentPage === pageNumbers.length ? "disabled" : ""}
          onClick={() => {
            this.setState({
              currentPage: pageNumbers.length
            });
            page(pageNumbers.length);

          }}
        >
          <PaginationLink>⭲</PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}

export default Index;
