import { Typography } from "@mui/material";
import AddTodo from "../components/AddTodo";

function AddPage({ addTodo }) {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Add Todo
      </Typography>

      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default AddPage;
