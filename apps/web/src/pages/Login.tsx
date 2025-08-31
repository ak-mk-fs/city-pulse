import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/Form";
import { useApi } from "@common/hooks/useApi";
import { login } from "@common/services/auth";
export interface LoginData {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading, error, execute } = useApi(login, [], false); // manual execution

  const handleSubmit = async (userData: LoginData) => {
    try {
    const result = await execute(userData); // wait for login to finish
    localStorage.setItem("userEmail", userData.email);
    alert(`Logged in as ${result.user.firstName} ${result.user.lastName}`);
    navigate("/home");
  } catch (err) {
    // error is already set in useApi, optional extra handling
    console.error(err);
  }
  };

  const handleRegister = () => {
    navigate("/register");
  }
  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <AuthForm onSubmit={handleSubmit} submitLabel="Login"  handleRegister={handleRegister} />
      {loading && <p>Logging in...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <p style={{ color: "green" }}>Logged in as {data.user.firstName} {data.user.lastName}</p>}
    </div>
  );
};

export default Login;
