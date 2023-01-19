import React from "react";

export default function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div>
          <img src="../components1/images1/Vector.png" alt="" />
          <input
            className="btn btn-secondary"
            type="text"
            placeholder="Search Medium"
          />
        </div>
        <div>
          <img src="../components1/images1/write.png" alt="" />
          <button>Sign up</button>
          <span>Sign In</span>
          <img src="../components1/images1/div.png" alt="" />
        </div>
      </div>
    </div>
  );
}
