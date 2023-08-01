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
        <footer
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#22222200" }}
        >
          <h6>
            © Designed and Developed by
            <a href="https://github.com/Senthiltechspot"> SenthilTechSpot</a>
          </h6>
        </footer>
      </div>
    );
  }
}

export default App;
