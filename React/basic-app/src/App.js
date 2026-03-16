import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { User } from "./User";
import Counter from "./Counter";
import UserCard from "./UserCard";

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [userName, setUserName] = useState("");
  // const [age, setAge] = useState("");
  // const [location, setLocation] = useState("");
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  const [userData, setUserData] = useState({
    userName: "",
    age: 0,
    location: "",
  });
  const classTopic = "State Management";
  const users = [
    {
      id: 1,
      name: "Nirmal",
      email: "nirmal@gmail.com",
      isActive: true,
    },
    {
      id: 2,
      name: "Rajesh",
      email: "rajesh@gmail.com",
      isActive: false,
    },
    {
      id: 3,
      name: "Chandran",
      email: "chandran@gmail.com",
      isActive: true,
    },
  ];
  const [userList, setUserList] = useState([]);

  const inputRef = useRef();

  const focusInput = () => {
    console.log(inputRef, "input");
    inputRef.current.focus();
  };

  sessionStorage.setItem("student", "Nirmal");
  const addUser = () => {
    // const newUser = {
    //   name: userName,
    //   age,
    //   location,
    // };
    console.log(userData, "userData");
    setUserList([...userList, userData]);
    setUserData({ userName: "", age: 0, location: "" });
    console.log(userList, "userList");
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("component mounted");
    const fetchUsers = async () => {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUserList(data);
          setLoading(false);
        });
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  const handleData = (message) => {
    console.log(message, "message");
  };

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="App">
          {isloggedIn ? <h3>Welcome</h3> : <h3>Login</h3>}
          <h1>Hi Guys Welcome to React</h1>
          <input type="text" ref={inputRef} />
          <button onClick={focusInput}>Focus</button>
          {/* <UserCard users={users} /> */}
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              isActive={user.isActive}
            />
          ))}
          <UserCard users={users} />
          {/* <UserCard name="Chandran" email="chandran@gmail.com" />
          <UserCard name="Nirmal" email="nirmal@gmail.com" /> */}
          {/* <User topic={classTopic} skill="Redux" /> */}
          <Counter sendData={handleData} handleClick={handleClick} />
          {/* <div className="input">
            <h3>Add user</h3>
            <input
              type="text"
              value={userData.userName}
              name="userName"
              // onChange={(e) => setUserName(e.target.value)}
              onChange={handleInput}
            />
            <input
              type="number"
              value={userData.age}
              name="age"
              // onChange={(e) => setAge(e.target.value)}
              onChange={handleInput}
            />
            <input
              type="text"
              name="location"
              value={userData.location}
              // onChange={(e) => setLocation(e.target.value)}
              onChange={handleInput}
            />
            <button onClick={addUser}>Add User</button>
          </div>
          <div className="userList">
            {userList.map((user) => {
              return (
                <div key={user.id} className="userData">
                  <h1>{user.name}</h1>
                  <h2>{user.age}</h2>
                  <h3>{user.location}</h3>
                </div>
              );
            })}
          </div>  */}
        </div>
      )}
    </>
  );
}

export default App;
