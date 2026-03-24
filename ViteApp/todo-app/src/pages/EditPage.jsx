import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import { useEffect, useState } from "react";

function EditPage({ addTodo }) {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  if (!todo) return <p>Loading...</p>;

  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Edit Todo
      </Typography>

      <AddTodo addTodo={addTodo} edit={todo} id={id} />
    </>
  );
}

export default EditPage;
