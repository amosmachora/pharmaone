import React from "react";
import "./SearchSuggestions.css";
import { Link } from "react-router-dom";

const SearchSuggestions = ({ element }) => {
  return (
    <Link to={element.link} style={{ textDecoration: "none" }}>
      <div className="search-suggestion flex space-between">
        <p>{element.title}</p>
        <p className="in">in {element.in}</p>
      </div>
    </Link>
  );
};

export default SearchSuggestions;
