import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Search from "./Pages/Search/Search";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
