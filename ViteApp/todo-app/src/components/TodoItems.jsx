import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function TodoItems({ todo }) {
  return (
    <ListItem>
      <ListItemText primary={todo.title} />
    </ListItem>
  );
}

export default TodoItems;
