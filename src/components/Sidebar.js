
const Sidebar = ({ darkMode }) => {
  return (
    <div style={sidebar(darkMode)}>
      <h2>⚡ Menu</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={item}>🏠 Dashboard</li>
        <li style={item}>👥 Users</li>
        <li style={item}>📊 Analytics</li>
        <li style={item}>⚙️ Settings</li>
      </ul>
    </div>
  );
};

const sidebar = (darkMode) => ({
  width: "220px",
  height: "100vh",
  background: darkMode ? "#1e1e1e" : "#f0f0f0",
  color: darkMode ? "#fff" : "#000",
  padding: "20px",
  position: "fixed",
});

const item = {
  margin: "20px 0",
  cursor: "pointer",
};

export default Sidebar;