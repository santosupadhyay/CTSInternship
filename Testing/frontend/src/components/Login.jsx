import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome Back</h2>
        <p style={styles.subheading}>Login to your account</p>

        <div style={styles.inputs}>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
        </div>

        <button style={styles.loginButton}>Login</button>

        <div style={styles.divider}>or</div>

        <button style={styles.googleButton} onClick={handleGoogleLogin}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    background: "#f5f6fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    background: "#fff",
    textAlign: "center",
  },
  heading: {
    marginBottom: "10px",
    fontSize: "26px",
    fontWeight: "bold",
    color: "#333",
  },
  subheading: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#888",
  },
  inputs: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  loginButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1e90ff",
    color: "white",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  divider: {
    margin: "10px 0",
    color: "#aaa",
    fontSize: "12px",
  },
  googleButton: {
    width: "100%",
    padding: "10px",
    color: "black",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
};

export default Login;
