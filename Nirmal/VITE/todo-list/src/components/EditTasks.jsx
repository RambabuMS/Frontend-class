import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


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

export default function EditTasks({ editTask, todos }) {
    const { id } = useParams();
    const [open, setOpen] = useState(true);
    const [task, setTask] = useState('');
    const handleClose = () => setOpen(false);

    const handleTask = () => {
        if (task.trim().length < 1) return;
        editTask(id, task);
        setTask("");
    }

    useEffect(() => {
        const found = todos.find(t => t.id.toString() === id);  
        if (found) {
            setTask(found.task);
        }
    }, [id, todos]);

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
                            Edit Task
                        </Typography>

                        <Button onClick={handleClose} component={Link} to="/">X</Button>
                    </Box>

                    {/* Input fields */}
                    <TextField
                        fullWidth
                        label="Task Name"
                        variant="outlined"
                        margin="normal"
                        name='task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />

                    {/* Submit button */}
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }} onClick={handleTask} component={Link} to="/"
                    >
                        Edit Task
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
