import React from "react";
import Header from "../../Components/Header/Header";
import SearchInput from "../../Components/SearchInput/SearchInput";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{ padding: "50px" }}
        className="d-flex flex-column align-items-center "
      >
        <img
          src={
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          alt="not available"
        />
        <SearchInput />
      </div>
    </div>
  );
};
export default Home;
