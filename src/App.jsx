import './App.css';
import { useState } from 'react'; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"; 
//saving data

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={isLoggedIn ? "main-screen" : "login-screen"}>
      {!isLoggedIn ? (
        // login screen
        <div className="login-container">
          <div className="login-box">

            {/* left side – image */}
            <div className="login-image">
            <img src="/planlogin.jpg" alt="login visual" />


            </div>

            {/* right side – form */}
            <div className="login-form">
              <h3 className="login-title">Create Account</h3>

              <input
                type="email"
                className="email-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="password-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="login-btn"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign Up
              </button>

              <p className="login-footer">
                Already have an account? <span className="login-link">Log in here</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // task management screen
        <div className="tasks-screen">
          <h1 className="tasks-title">My Planner</h1>
          <p className="tasks-subtitle">welcome back</p>

          <input
            type="text"
            className="task-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <input
            type="text"
            className="username-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
          <button className="show-name-btn" onClick={() => setDisplayName(username)}> show name</button>
          {displayName && <p className="displayed-name">
            Welcome: {displayName}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
