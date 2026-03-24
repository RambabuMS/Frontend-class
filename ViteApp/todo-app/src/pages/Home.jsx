import { List, Typography } from "@mui/material";
import TodoItem from "../components/TodoItem";

function Home({ todos, deleteTodo, toggleTodo }) {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Todo List
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
