import React from "react";
import { Button } from "reactstrap";

function SearchList(props) {
  const {value, onInputChange, onSearchUser} = props;
  return (
    <form onSubmit={e => onSearchUser(e)}>
      <input type="text"
             value={value}
             onChange={({target}) => onInputChange(target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}

export default SearchList;