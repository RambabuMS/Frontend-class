import { useState, useEffect } from 'react'
import './App.css'
import { data, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx'
import PageToggleTabs from './components/PageToggleTabs.jsx'
import PendingTasks from './pages/PendingTasks.jsx'
import CompletedTasks from './pages/CompletedTasks.jsx'
import AddTasks from './components/AddTasks.jsx';
import EditTasks from './components/EditTasks.jsx';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import FabIcon from './components/FabIcon';

function App() {
  const [todos, setTodos] = useState([]);
  const [tasksLoaded, setTasksLoaded] = useState(false);

  const fetchTodos = async () => {
    try {
      const res = await fetch('https://69be96a417c3d7d977926d41.mockapi.io/list/tasks');
      setTasksLoaded(true);
      return res.json();
    }
    catch (e) {
      console.log("Error fetching data", e);
    }
  }

  const deleteTask = async (id) => 
  {
    const prevTask = todos;
    setTodos((prevTask) => prevTask.filter((task) => task.id !== id));

    try {
      const res = await fetch(`https://69be96a417c3d7d977926d41.mockapi.io/list/tasks/${id}`, {
        method: 'DELETE'
      });
    }
    catch (e) {
      console.log("Error deleting data", e);
      setTodos(prevTask);
    }
  }

  const updateTask = async (id, status) => 
  {    
    const prevTask = todos;        
    setTodos((task) => task.map(todo => todo.id === id ? {...todo, completed: status} : todo));

    try {
      const res = await fetch(`https://69be96a417c3d7d977926d41.mockapi.io/list/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({completed: status})
      })
      console.log("Task Updated", res.status);
      console.log(todos);
    }
    catch (e) {
      console.log("Error updating data", e);      
      setTodos(prevTask);
    }
  }

  const editTask = async (id, taskname) => 
  {    
    const prevTask = todos;        
    setTodos((task) => task.map(todo => todo.id === id ? {...todo, task: taskname} : todo));

    try {
      const res = await fetch(`https://69be96a417c3d7d977926d41.mockapi.io/list/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({task: taskname})
      })
      console.log("Task Edited", res.status);
      console.log(todos);
    }
    catch (e) {
      console.log("Error editing data", e);      
      setTodos(prevTask);
    }
  }

  const addTask = async (task) => 
  {
    const prevTasks = todos;
    const newTask = {
      id: Date.now(),
      task,
      completed: false,
      createdAt: new Date().toLocaleString()
    }
    setTodos([...prevTasks, newTask]);

    try {
      const res = await fetch(`https://69be96a417c3d7d977926d41.mockapi.io/list/tasks`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({task, completed: false})
      })
      console.log("Task Updated", res.status);
      console.log(todos);
    }
    catch (e) {
      console.log("Error deleting data", e);
      setTodos(prevTasks);
    }
  }


  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  return (
    <>
      <section id="center">
        {
          (tasksLoaded) ? <>
            <ResponsiveAppBar /><PageToggleTabs />
            <Routes>
              <Route path='/' element={<Home todos={todos} deleteTask={deleteTask} updateTask={updateTask}/>} />
              <Route path='/pending' element={<PendingTasks todos={todos} deleteTask={deleteTask}  updateTask={updateTask}/>} />
              <Route path='/completed' element={<CompletedTasks todos={todos} deleteTask={deleteTask}  updateTask={updateTask}/>} />         
              <Route path='/add' element={<AddTasks addTask={addTask}/>}/>              
              <Route path='/edit/:id' element={<EditTasks editTask={editTask} todos={todos}/>}/>              
            </Routes>
            <FabIcon/>            
          </> :
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={840} height={60} sx={{ backgroundColor: 'white' }} />              
              <Skeleton variant="rectangular" width={840} height={120} sx={{ backgroundColor: 'white' }} />
              <Skeleton variant="rounded" width={840} height={120} sx={{ backgroundColor: 'white' }} />
            </Stack>
        }
      </section>
    </>
  )
}

export default App
