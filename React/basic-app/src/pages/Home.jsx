import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/Counter");
  };
  return (
    <div>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/user">User</Link>
      </nav>
      <Button variant="contained" onClick={handleNavigate}>
        Navigate
      </Button>
    </div>
  );
}

export default Home;
