import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ searchValue }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(searchValue ? searchValue : "");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsTyping(false);
  };

  const handleKeyDown = (event) => {
    setIsTyping(true);
    if (event.which === 13) {
      // Check if the pressed key is "Enter" (keyCode 13)
      handleSearch(event);
    }
    if (event.which === 8 && event.target.value === "") {
      setIsTyping(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div
      className={`container ${isFocused ? "is-focus" : ""} ${
        isTyping ? "is-type" : ""
      }`}
    >
      <fieldset className="field-container">
        <input
          type="text"
          placeholder="Search..."
          className="field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={searchTerm}
        />
        <div className="icons-container">
          <div className="icon-search"></div>
          <div className={`icon-close ${isTyping ? "is-type" : ""}`}>
            <div className="x-up"></div>
            <div className="x-down"></div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SearchBar;
