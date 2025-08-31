import React, { useState } from "react";
interface UserData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
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
          value={userData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
      <button type="submit">{submitLabel}</button>
      {!isRegister && <button type="button" onClick={handleRegister}>Register</button>}

    </form>
  );
};

export default AuthForm;


