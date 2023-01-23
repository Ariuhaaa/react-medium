import React, { useEffect, useState } from "react";

export default function User({ userModal, setUserModal, handleUser }) {
  const [user, setUser] = useState([]);

  const styleModal = userModal ? "block" : "none";

  useEffect(() => {
    fetch("http://192.168.1.50:4040/api/users")
      .then((res) => res.json())
      .then((user) => {
        console.log(user.username);
        setUser(user);
      });
  }, []);

  function closeModal() {
    setUserModal(false);
  }

  return (
    <div className="container modal" style={{ display: styleModal }}>
      <div className="modal-body">
        <h1>Хэрэглэгчийн мэдээлэл</h1>
        <div>
          <div className="row">
            <input className="col"></input>
            <div>
              <input className="col"></input>
            </div>
            <div></div>
            <button className="col" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
