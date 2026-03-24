import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const navigate = useNavigate();

  return (
    <ListItem
      secondaryAction={
        <>
          <Button onClick={() => navigate(`/edit/${todo.id}`)}>Edit</Button>

          <IconButton onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />

      <ListItemText
        primary={todo.title}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />
    </ListItem>
  );
}

export default TodoItem;
