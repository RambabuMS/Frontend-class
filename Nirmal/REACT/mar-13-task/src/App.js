import logo from './logo.svg';
import './App.css';
import Registration from './pages/Registration';
import { use, useState } from 'react';
import Users from './pages/Users';

function App() {

  const [isShowingUsersList, setIsShowingUsersLists] = useState(false);  
  const [usersList, setUsersList] = useState([]);

  const addUser = (user) => {
    setUsersList([...usersList, user]);
    console.log("user added", user);
  }

  return (
    <div className="App">
      {
        isShowingUsersList ? <Users usersList={usersList}  isShowingUsersList={setIsShowingUsersLists} /> : <Registration addUser={addUser} isShowingUsersList={setIsShowingUsersLists} />
      }
    </div>
  );
}

export default App;
