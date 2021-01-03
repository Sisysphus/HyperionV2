import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <>
      <h1 className="h1-thing">Hyperion</h1>
      <h2 className="h2-thing">Log In</h2>
      <form onSubmit={handleSubmit}>
        <ul className="ul-box">
          {errors.map((error, idx) => (
            <li className="error-box" key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <div className="label-wrapper">
          <label className="label">Username or Email</label>
          <input
            className="class-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className="label-wrapper">
          <label className="label">Password</label>
          <input
            className="class-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="log-in-button">
          Log In
        </button>
      </form>
    </>
  );
}

export default LoginForm;
