import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddTodo({ addTodo, edit, id }) {
  const [text, setText] = useState(edit?.title || "");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (edit) {
  //     setText(edit.title);
  //   }
  // }, [edit]);

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text, id);
    setText("");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <TextField
        fullWidth
        label="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button variant="contained" onClick={handleAdd}>
        {edit ? "Update" : "Add"}
      </Button>
    </Box>
  );
}

export default AddTodo;
