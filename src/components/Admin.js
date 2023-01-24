import React, { useEffect, useState } from "react";
import User from "../User";
import { BarCharts } from "./BarCharts";

export default function Admin() {
  const [data, setData] = useState([]);
  // const[loading]

  const [userModal, setUserModal] = useState(false);

  // useEffect(() => {
  //   fetch("http://192.168.1.50:4040/users")
  //     .then((response) => response.json())
  //     .then((dt) => {
  //       console.log(dt.news);
  //       setData(dt.news);
  //     });
  // }, []);
  function handleUser() {
    setUserModal(!userModal);
  }
  return (
    <div>
      <div className="row my-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h4 className="card-title text-warning">Users</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i className="bi bi-people" style={{ fontSize: "40px" }}></i>
              <h3>4500</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h4 className="card-title text-warning">News</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i className="bi bi-newspaper" style={{ fontSize: "40px" }}></i>
              <h3>9000</h3>
            </div>
          </div>
        </div>
        {/* <div className="col-md-9"> */}
        <div className="col-md-4">
          <div className="card p-3">
            <h4 className="card-title text-warning">Category</h4>
            <div className="d-flex justify-content-between align-items-center">
              <i className="bi bi-list-nested" style={{ fontSize: "40px" }}></i>
              <h3>20</h3>
            </div>
          </div>
        </div>
        <BarCharts />
        <div className="row p-3">
          <div className="table-responsive">
            <table className="table table-scrip">
              <thead>
                <th>№</th>
                <th>Title</th>
                <th>Category</th>
                <th>Is Trending?</th>
              </thead>
              <tbody>
                {data.map(({ _id, title, isTrending, category }, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{title}</td>
                      <td>{category}</td>
                      <td>
                        {isTrending ? (
                          <span className="badge bg-success">yes</span>
                        ) : (
                          <span className="badge bg-danger">no</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* <User
        userModal={userModal}
        setUserModal={setUserModal}
        handleUser={handleUser}
      /> */}
    </div>
  );
}
