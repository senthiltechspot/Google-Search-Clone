import React, { useState } from "react";
import "./SearchInput.css";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
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
    <div className="mt-4">
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
      <div className="searchbtn" style={{ padding: "50px", zIndex: 100 }}>
        <button type="button" className="btn btn-light" onClick={handleSearch}>
          Google Search
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() =>
            (window.location.href = "https://www.google.com/doodles")
          }
        >
          Im Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
