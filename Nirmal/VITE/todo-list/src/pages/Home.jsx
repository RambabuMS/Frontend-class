import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home({ todos, deleteTask, updateTask }) {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        updateTask(value.id, !value.completed);

    };

    const handleEdit = (id) => {

        updateTask(id);
    }

    const handleDelete = (id) => {

        deleteTask(id);
    }


    return (
        <>
            {
                <List sx={{ width: '100%', bgcolor: '#fbfde7', color: 'black' }}>

                    {todos.map((todo) => {
                        const labelId = `checkbox-list-label-${todo}`;

                        return (
                            <ListItem
                                key={todo.id}
                                secondaryAction={
                                    <>
                                        <IconButton
                                            edge="end"
                                            aria-label="edit"
                                            onClick={() => handleEdit(todo)}
                                            component={Link} to={`/edit/${todo.id}`}
                                        >
                                            <EditIcon color="primary" />
                                        </IconButton>

                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => handleDelete(todo.id)}
                                        >
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </>
                                }
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={todo.completed}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <div>
                                        <ListItemText sx={{ textDecoration: (todo.completed) ? 'line-through' : 'none' }} id={labelId} primary={`${todo.task}`} />
                                        <ListItemText sx={{ color: 'grey', float: 'right' }} primary={`createdAt: ${todo.createdAt}`} />
                                    </div>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            }
        </>
    );
}
