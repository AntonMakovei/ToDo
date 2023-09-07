import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios.get('http://127.0.0.1:3001/tasks').then(res => {
      setTasks(res.data)
    }).catch(e => console.log('^.^ - error:' , e.toString()))
  }

  const handleTaskCreation = () => {
    axios.post('http://127.0.0.1:3001/tasks', {name: newTask}).then(r => {
      if(r.data.isCreated) {
        setNewTask('')
        getTasks()
      }
    })
  }

  return (
    <div className="App">
      <div className="wrapper">
        {tasks.map(({id, name}) => <ul className="list" key={id}>
          <li>id: <span><strong>{id}</strong></span></li>
          <li>name: <span>{name}</span></li>
          <li className="checkBoxItem">completed: <input type="checkbox"/> </li>
        </ul>)}
      </div>
      <div className="inputArea">
        <input type="text" value={newTask} onChange={e => {
          setNewTask(e.target.value)
        }} />
        <button onClick={() => handleTaskCreation()}>Create new Task</button>
      </div>
    </div>
  );
}

export default App;
