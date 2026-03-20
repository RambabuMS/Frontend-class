import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import TodoItems from "./../components/TodoItems";
import "./../App.css";

function Home({ todos }) {
  return (
    <>
      <Typography variant="h4" sx={{ mt: 3 }} className="todo">
        Todo List
      </Typography>
      <List>
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </List>
    </>
  );
}

export default Home;
