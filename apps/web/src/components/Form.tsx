import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { UserData } from "../types";
interface AuthFormProps {
  onSubmit: (data: UserData) => void;
  submitLabel: string;
  isRegister?: boolean;
  handleRegister?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, submitLabel, isRegister, handleRegister }) => {
  const [userData, setUserData] = useState({ email: "", password: "", firstName: "", lastName: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userData);
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    console.log(e.target.name, e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={handleSubmit} style={{ margin: "2rem auto" }}>
      {isRegister && (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <label>First Name</label>
            <input
              type="text"
              className="input-field"
              name="firstName"
              value={userData.firstName || ""}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="input-field"
              value={userData.lastName || ""}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
        </>
      )}
      <div style={{ marginBottom: "1rem" }}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="input-field"
          value={userData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="input-field"
          value={userData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      {!isRegister ? <button type="button" onClick={handleRegister}>Register</button> : <Link to={"/login"}><button type="button" onClick={handleRegister}>Back to Login</button></Link>}
      <button type="submit">{submitLabel}</button>

    </form>
  );
};

export default AuthForm;


