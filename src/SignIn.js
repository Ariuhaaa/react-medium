import { useState } from "react";

export default function SignIn({ show, setShow, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dis = show ? "block" : "none";
  return (
    <div
      className="row modal "
      style={{ display: dis }}
      onClick={() => setShow(false)}
    >
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3">
          <h2>Sign In</h2>
          <label className="form-label">Username</label>
          <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-success"
            onClick={() => {
              onLogin(username, password);
              setShow(false);
            }}
          >
            Нэвтрэх
          </button>
          <button className="btn btn-danger" onClick={() => setShow(false)}>Хаах</button>
        </div>
      </div>
    </div>
  );
}
