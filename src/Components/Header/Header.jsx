import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header p-4" style={{ cursor: "pointer" }}>
      <div className="links pe-auto">
        <a>About</a>
        {/* <h6>Store</h6> */}
      </div>
      <div
        className="icons d-flex align-items-center "
        style={{ cursor: "pointer" }}
      >
        <a>Gmail</a>
        <a>Images</a>
        <a>
          <i
            className="bi bi-grid-3x3-gap-fill"
            style={{ fontSize: "1.5rem" }}
          ></i>
        </a>
        <img
          src="https://media.licdn.com/dms/image/D5603AQFtp2u3iCB-Pw/profile-displayphoto-shrink_100_100/0/1688234225809?e=1696464000&v=beta&t=bjc_d4yfsmfvRk-DQthAJA1FNx-fgr3D1fCxYNfFKtM"
          className="rounded-circle avatar"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
