import * as React from "react";

import * as apiClient from "./apiClient";

const Filter = (props) => {
  return (
    <form className="search">
      <label>
        {" "}
        Search by City{" "}
        <input
          type="search"
          onChange={(e) => props.setSearchedTerm(e.currentTarget.value)}
        />
      </label>
    </form>
  );
};

export default Filter;
