import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/Form";
import { useApi } from "@common/hooks/useApi";
import { register } from "@common/services/auth";

export interface RegisterData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}
const Register: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error, execute } = useApi(register, [], false); // manual execution

  const handleSubmit = (userData: RegisterData) => {
    execute(userData)
      .then(() => {
        alert("Registration successful! Please login.");
        navigate("/login");
      })
      .catch(() => {});
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleSubmit} submitLabel="Register" isRegister />
      {loading && <p>Creating account...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <p style={{ color: "green" }}>Registered successfully!</p>}
    </div>
  );
};

export default Register;
