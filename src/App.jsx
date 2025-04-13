import './App.css';
import{ useState } from 'react'; //saving data

function App() {
const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);
const [username, setUsername] = useState("");
const [displayName, setDisplayName] = useState("");

  return (
    <div>
      <h1 className="h1">ניהול משימות עם GPT</h1>
      <p>ברוכה הבאה לפרויקט הראשון שלך ב-React 🎉</p>

      <input 
      type="text"//simple text input
      value={task} //using jsx->{task},what appears in the input=task
      onChange={(e) => setTask(e.target.value)} //onChange event to update task state, e=event,e.target.value=the value of the input
      placeholder="כתבי משימה כאן" 
        />
       <input 
      type="text"//simple text input
      value={username} //using jsx->{task},what appears in the input=task
      onChange={(e) => setUsername(e.target.value)} //onChange event to update task state, e=event,e.target.value=the value of the input
      placeholder="כתבי שם כאן" 
        />
      <button onClick={() => {setDisplayName(username)}}>הצג שמך</button>
      {displayName && <p>השם שלך: {displayName}</p>}
    </div>
  );
}

export default App;
