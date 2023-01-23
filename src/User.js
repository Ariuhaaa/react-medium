import React, { useEffect, useState } from "react";

export default function User({ userModal, setUserModal, handleUser }) {
  const [user, setUser] = useState([]);

  const styleModal = userModal ? "block" : "none";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  if (loading) return "Loading";
  if (error) return "Error";

  return (
    <div className="container modal" style={{ display: styleModal }}>
      <div className="modal-body">
        <h1>Хэрэглэгчийн мэдээлэл</h1>
        <div>
          <div>
            <input className="col-md-3" type="text" placeholder="Lastname" />
          </div>

          <div>
            <input className="col-md-3" type="text" placeholder="Firstname" />
          </div>
          <div>
            <button className="col-md-3 btn btn-primary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
