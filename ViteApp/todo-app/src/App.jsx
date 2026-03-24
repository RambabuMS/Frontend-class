import { useEffect, useState } from "react";
import { Container, Snackbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

function App() {
  const [todos, setTodos] = useState([]);
  const [snack, setSnack] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = async (title, id) => {
    if (id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id,
            title,
            completed: false,
          }),
          headers: {
            "Content-type": "application/json",
          },
        },
      );
      const updated = await res.json();

      setTodos((prev) =>
        prev.map((t) =>
          t.id === Number(id) ? { ...t, title: updated.title } : t,
        ),
      );
      setMsg("Todo Updated");
      setSnack(true);
      return;
    }

    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({ title, completed: false }),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();
    setTodos((prev) => [{ ...data, id: Date.now() }, ...prev]);
    setMsg("Todo Added");
    setSnack(true);
  };

  const deleteTodo = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((todo) => todo.id !== id));
    setMsg("Todo Deleted");
    setSnack(true);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <Navbar />

      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            }
          />

          <Route path="/add" element={<AddPage addTodo={addTodo} />} />

          <Route path="/edit/:id" element={<EditPage addTodo={addTodo} />} />
        </Routes>
      </Container>

      <Snackbar
        open={snack}
        autoHideDuration={2000}
        message={msg}
        onClose={() => setSnack(false)}
      />
    </>
  );
}

export default App;
