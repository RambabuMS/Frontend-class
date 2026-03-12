import "./UserCard.css";

export default function UserCard({ name, email, isActive }) {
  const styles = {
    color: "red",
    fontSize: "20px",
  };
  // const isActive = false;
  return (
    <div className="card">
      <h1 style={styles}>{name}</h1>
      <p style={{ color: "blue" }}>{email}</p>
      <h2 style={{ color: isActive ? "green" : "yellow" }}>Dynamic Styling</h2>
    </div>
  );
}
