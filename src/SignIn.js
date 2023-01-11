import { useState } from "react";

export default function SignIn({ show }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dis = show ? "block" : "none";
  return (
    <div className="row modal " style={{ display: dis }}>
      <div className="modal-body">
        <div className="mb-3">
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
        <button className="nevtreh" onClick={() => show(username, password)}>
          Nevtreh
        </button>
      </div>
    </div>
  );
}
