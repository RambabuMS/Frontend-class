import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddTasks({ addTask }) {
    const [open, setOpen] = React.useState(true);
    const [task, setTask] = React.useState("");
    const handleClose = () => setOpen(false);

    const handleNewTask = () => {
        if (task.trim().length < 1) return;
        addTask(task);
        setTask("");
    }

    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    {/* Header with close */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ color: 'black' }}>
                            Add New Task
                        </Typography>

                        <Button onClick={handleClose} component={Link} to="/">X</Button>
                    </Box>

                    {/* Input fields */}
                    <TextField
                        fullWidth
                        label="Task Name"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setTask(e.target.value)}
                    />

                    {/* Submit button */}
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }} onClick={handleNewTask} component={Link} to="/"
                    >
                        Add Task
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
