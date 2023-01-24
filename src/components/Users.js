// import React from "react";

// export default function Users() {
//   return <div>Users</div>;
// }
import React, { useEffect, useState } from "react";

export default function User({ userModal, setUserModal, handleUser }) {
  const init = {
    lastName: "",
    firstName: "",
    organization: "",
  };
  const [user, setUser] = useState(init);

  // const styleModal = userModal ? "block" : "none";

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   fetch("http://192.168.1.50:4040/api/users")
  //     .then((res) => res.json())
  //     .then((user) => {
  //       console.log(user.username);
  //       setUser(user);
  //     });
  // }, []);

  // function closeModal() {
  //   setUserModal(false);
  // }

  const onSave = (e) => {
    e.preventDefault();

    // setSave({   })
    // setTaskObj({ ...taskObj, title: e.target.value });

    console.log(user);

    fetch("https://medium-api-psi.vercel.app/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
      })
      .catch((err) => console.log(err));
    setUser(init);
  };

  // if (loading) return "Loading";
  // if (error) return "Error";

  return (
    <div className="container">
      {/* <div className=""></div>{" "}
      <div className="container modal" style={{ display: styleModal }}>
        {" "}
        <div className="modal-body"> */}
      <h1 className="mt-0">Хэрэглэгчийн мэдээлэл</h1>
      <div>
        <div>
          <input
            className="col-md-3 w-50 form-control"
            type="text"
            value={user.lastName}
            onChange={(e) => {
              console.log(user);
              setUser({ ...user, lastName: e.target.value });
            }}
            placeholder="Lastname"
          />
        </div>
        <div>
          <input
            className="col-md-3 w-50 mt-3 form-control"
            type="text"
            value={user.firstName}
            onChange={(e) => {
              console.log(user);
              setUser({ ...user, firstName: e.target.value });
            }}
            placeholder="Firstname"
          />
        </div>
        <div>
          <input
            className="col-md-3 w-50 mt-3 form-control"
            type="text"
            value={user.organization}
            onChange={(e) => {
              console.log(user);
              setUser({ ...user, organization: e.target.value });
            }}
            placeholder="Organization"
          />
        </div>
        <div>
          <button className="col-md-3 btn btn-primary" onClick={onSave}>
            Save
          </button>
          <button className="col-md-3 btn btn-primary">Close</button>
        </div>
      </div>
    </div>
    // </div>
    // </div>
  );
}
