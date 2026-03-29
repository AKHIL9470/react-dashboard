import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import UserChart from "../components/UserChart";
import { getUsers } from "../services/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      setError("❌ Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // Loading UI
  if (loading) return <h2 style={{ padding: "20px" }}>Loading... ⏳</h2>;

  // Error UI
  if (error) return <h2 style={{ padding: "20px" }}>{error}</h2>;

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar darkMode={darkMode} />

      {/* Main Content */}
      <div style={{ marginLeft: "240px", width: "100%" }}>
        <div style={container(darkMode)}>
          <h2>📊 Dashboard</h2>

          {/* Dark Mode Toggle */}
          <button style={button} onClick={() => setDarkMode(!darkMode)}>
            Toggle Dark Mode 🌙
          </button>

          {/* Cards */}
          <div style={cardContainer}>
            <div style={card(darkMode)}>👥 Users: {users.length}</div>
            <div style={card(darkMode)}>💰 Sales: 1200</div>
            <div style={card(darkMode)}>📈 Revenue: $5000</div>
          </div>

          {/* Chart */}
          <div style={{ marginTop: "40px" }}>
            <h3>User Data Chart</h3>
            <UserChart data={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const container = (darkMode) => ({
  padding: "20px",
  background: darkMode ? "#121212" : "#ffffff",
  color: darkMode ? "#ffffff" : "#000000",
  minHeight: "100vh",
});

const button = {
  marginTop: "10px",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const cardContainer = {
  display: "flex",
  gap: "20px",
  marginTop: "20px",
};

const card = (darkMode) => ({
  flex: 1,
  padding: "20px",
  background: darkMode ? "#1e1e1e" : "#f5f5f5",
  color: darkMode ? "#ffffff" : "#000000",
  borderRadius: "10px",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
  transition: "0.3s",
  cursor: "pointer",
});

export default Dashboard;