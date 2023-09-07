import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/tasks').then(res => {
      console.log(res)
      setTasks(res.data)
    })
  }, [])

  return (
    <div className="App">
      {tasks.map((id, name) => <ul key={id}>
        <li>id: {id}</li>
        <li>name: {name}</li>
      </ul>)}
    </div>
  );
}

export default App;
