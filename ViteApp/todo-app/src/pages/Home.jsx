import { List, Typography } from "@mui/material";
import TodoItem from "../components/TodoItem";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function Home({ todos, deleteTodo, toggleTodo }) {
  const { user } = useContext(UserContext);
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Todo List - {user}
      </Typography>

      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </>
  );
}

export default Home;
