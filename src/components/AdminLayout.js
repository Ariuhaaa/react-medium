import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  //   function handleUser() {
  //     setUserModal(!userModal);
  //   }

  return (
    <div>
      <div className="navbar bg-dark flex-nowrap">
        <a href="#" className="col-md-3 navbar-brand text-light mx-5">
          Company Name
        </a>
        <input type="text" className="w-75 form-control bg-light border-0" />
        <div className="nav text-nowrap">
          <span className="text-light mx-5"> Log Out </span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row  mx-5">
          <div className="col-md-3">
            <div
              className="nav bg-light flex-column"
              onClick={(e) => e.preventDefault()}
            >
              <div className="nav-item">
                <Link className="nav-link" to="/admin">
                  Dashboard
                </Link>
              </div>
              <div className="nav-item">
                <a href="nav-link">News</a>
              </div>
              <div className="nav-item" onClick={() => console.log("s")}>
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
