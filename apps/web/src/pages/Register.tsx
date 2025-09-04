import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/Form";
import { useApi } from "@common/hooks/useApi";
import { register } from "@common/services/auth";
import type { UserData } from "../types";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error, execute } = useApi(register, [], false); // manual execution

  const handleSubmit = (userData: UserData) => {
    execute(userData)
      .then(() => {
        alert("Registration successful! Please login.");
        navigate("/login");
      })
      .catch(() => {});
  };

  return (
    <div className="register-wrapper">
      <h2>Register</h2>
      <AuthForm onSubmit={handleSubmit} submitLabel="Register" isRegister />
      {loading && <p>Creating account...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <p style={{ color: "green" }}>Registered successfully!</p>}
    </div>
  );
};

export default Register;
