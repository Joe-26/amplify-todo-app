import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  function addTask() {
    if (taskInput !== '') {
      tasks.push(taskInput);
      console.log(tasks)
    }
    setTaskInput('');
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  return (
    <div className='App bg-charcoal flex justify-center items-center h-screen'>
      <div className='w-1/2'>
        <div className='flex flex-col bg-carmine rounded-2xl py-5'>
          
          <div className='flex items-center px-4'>
            <h1 className='text-5xl text-jasmine'>To-Do List</h1>
          </div>

          <div className='flex justify-center mt-10 mb-6'>
            <div className='rounded-full bg-white w-[80%]'>
              <input placeholder='Enter Task' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} onKeyDown={handleKeyDown} className='rounded-l-full w-3/4 px-4 py-2' />
              <button onClick={addTask} className='border bg-emerald text-charcoal font-bold rounded-full w-1/4 py-2'>ADD</button>
            </div>
          </div>

          <div className='flex flex-col gap-2 px-5 items-center'>
            {tasks.map((task, index) => (
              <div key={index} className='flex gap-2 w-[85%]'>
                <button onClick={() => removeTask(index)} className='bg-emerald rounded-full px-2'>&#10004;</button>
                <div className='text-jasmine'>{task}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
