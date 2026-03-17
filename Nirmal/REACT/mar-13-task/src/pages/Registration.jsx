import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { use } from 'react';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#390224',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#223b58',
    }),
}))

function Registration({ addUser, isShowingUsersList }) {

    const [user, setUser] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmission = () => {
        addUser(user);
        setUser({
            username: '',
            email: '',
            password: ''
        });
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Item>
                    <Box
                        component="form"
                        sx={{ bgcolor: '#d7d2d8', p: 2 }}
                        noValidate
                        autoComplete="off"
                    >
                        <Stack spacing={2}>
                            <TextField label="Username" variant="standard" name='username' onChange={handleInput} value={user.username} fullWidth />

                            <TextField label="Email Address" type="email" name='email' variant="standard" onChange={handleInput} value={user.email} fullWidth />

                            <TextField
                                label="Password"
                                type="password"
                                name='password'
                                autoComplete="current-password"
                                variant="standard"
                                onChange={handleInput}
                                value={user.password}
                                fullWidth
                            />

                            <Stack
                                spacing={2}
                                direction="row"
                                justifyContent="center"
                                divider={<Divider orientation="vertical" flexItem />}
                            >
                                <Button variant="contained" color="success" onClick={() => {
                                    handleSubmission()
                                }}>
                                    Add User
                                </Button>
                                <Button variant="contained" color="primary" onClick={()=>{
                                    isShowingUsersList(true);
                                }}>
                                    View All Users
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Item>
            </Stack>
        </Box>
    );
}

export default Registration;