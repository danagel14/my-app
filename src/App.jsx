import './App.css';
import { useState } from 'react';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("התחברות הצליחה עם גוגל:", user.displayName, user.email);
      setUsername(user.displayName);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("שגיאה בהתחברות עם גוגל:", error.message);
    }

    const handleFacebookLogin = async () => {
      const provider = new FacebookAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("התחברות הצליחה עם פייסבוק:", user.displayName, user.email);
        setUsername(user.displayName);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("שגיאה בהתחברות עם פייסבוק:", error.message);
      }
    };
    
  };

  return (
    <div className={isLoggedIn ? "main-screen" : "login-screen"}>
      {!isLoggedIn ? (
        <div className="login-container">
          <div className="login-box">

            {/* התמונה בצד ימין */}
            <div className="login-image">
              <img src="/planlogin.jpg" alt="login visual" />
            </div>

            {/* הטופס בצד שמאל */}
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
                <i class="bi bi-box-arrow-in-left"></i>
              </button>
              <br>
              </br>
              {}
              <button className="google-btn" onClick={handleGoogleLogin}>
               Login With Google
               <i className="bi bi-google ms-2"></i>
              </button>
              <br>
              </br>
              <button className="google-btn" onClick={handleFacebookLogin}>
               Login With Fackbook
               <i className="bi bi-facebook"></i>
              </button>

              <p className="login-footer">
                Already have an account? <span className="login-link">Log in here</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="tasks-screen">
          <h1 className="tasks-title">My Planner</h1>
          <p className="tasks-subtitle">Welcome back</p>

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
          <button className="show-name-btn" onClick={() => setDisplayName(username)}>Show name</button>
          {displayName && <p className="displayed-name">Welcome: {displayName}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
