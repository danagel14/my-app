import{ useState } from 'react'; //saving data

function App() {
  const [tasks, setTasks] = useState([]); // Initialize tasks state
  return (
    <div>
      <h1>ניהול משימות עם GPT</h1>
      <p>ברוכה הבאה לפרויקט הראשון שלך ב-React 🎉</p>

      <input 
      type="text"//simple text input
      value={task} //using jsx->{task},what appears in the input=task
      onChange={(e) => setTask(e.target.value)} //onChange event to update task state, e=event,e.target.value=the value of the input
      placeholder="כתבי משימה כאן"
        />
    </div>
  );
}

export default App;
