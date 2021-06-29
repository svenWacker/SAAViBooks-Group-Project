import React from "react";

const Search = (props) => {
  return (
    <div className="area">
      <form onSubmit={props.findBook} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;