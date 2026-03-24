import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AddTodo from "../components/AddTodo";

function EditPage({ todos, addTodo }) {
  const { id } = useParams();

  const editTodo = todos.find((t) => t.id === Number(id));

  if (!editTodo) return <p>Loading...</p>;

  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Edit Todo
      </Typography>

      <AddTodo addTodo={addTodo} edit={editTodo} id={id} />
    </>
  );
}

export default EditPage;
