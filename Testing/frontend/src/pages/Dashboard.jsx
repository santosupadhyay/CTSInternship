import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data.user))
      .catch((err) => {
        console.error("Not authenticated");
        navigate("/"); // redirect to login if not logged in
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/auth/logout", {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div
      style={{
        width:'100vw',
        minHeight: "100vh",
        background: "linear-gradient(to right, #f4f4f4, #dff2ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        {user ? (
          <>
            <img
              src={user.photo}
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1rem",
                border: "3px solid #4dabf7",
              }}
            />
            <h2
              style={{
                marginBottom: "0.5rem",
                color: "#333",
              }}
            >
              Welcome, {user.name}
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#666",
                marginBottom: "1.5rem",
              }}
            >
              You are now logged in.
            </p>
            <button
              onClick={handleLogout}
              style={{
                padding: "0.6rem 1.2rem",
                backgroundColor: "#4dabf7",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#339af0")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#4dabf7")
              }
            >
              Sign Out
            </button>
          </>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
