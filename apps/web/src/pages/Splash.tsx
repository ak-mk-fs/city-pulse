import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen: React.FC = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      const token = localStorage.getItem("token");
      navigate(token ? "/events" : "/login");
    }, 2000); // show splash for 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!show) return null;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
      <img src="/logo.png" alt="App Logo" style={{ width: 120, marginBottom: 20 }} />
      <h1>EventFinder</h1>
      <div className="spinner" style={{
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #3498db",
        borderRadius: "50%",
        width: 40,
        height: 40,
        marginTop: 20,
        animation: "spin 1s linear infinite"
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
