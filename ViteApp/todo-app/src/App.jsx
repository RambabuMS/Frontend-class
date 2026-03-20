import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/home" element={<Home todos={todos} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
