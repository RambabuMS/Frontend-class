import { Typography } from "@mui/material";
import AddTodo from "../components/AddTodo";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function AddPage({ addTodo }) {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Add Todo - {user}
      </Typography>
      <input onChange={(e) => setUser(e.target.value)} />
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default AddPage;
