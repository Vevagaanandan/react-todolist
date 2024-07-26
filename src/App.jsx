import React, { useEffect, useState } from 'react'
import Title from './Components/Title'

function App() {

  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([]);
  
  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim() !== ""){
      setTasks( t => [...t, newTask]);
      setNewTask("");
    }

  }

  function deleteTask(index){
    const newTasks = tasks.filter((_, e) => e !== index);

    setTasks(newTasks);
  }


  return (
    <div className='md:w-3/4 m-auto mt-20 relative'>
      <Title />
            
      <div className='theInput'>
        <div className='flex flex-col w-4/5 lg:w-2/4 m-auto'>
          <input 
            placeholder='Enter a task...' 
            value={newTask} 
            onChange={handleInputChange} 
            type="text" 
            className='p-1 px-2 rounded m-auto w-full h-8' 
          />
          <button 
            className='text-white text-xl font-semibold rounded border-2 border-white mt-4 p-1 hover:bg-[#3b53be] duration-100' 
            onClick={addTask} >Add
          </button>
        </div>
      </div>

      <div className='theList w-4/5 lg:w-2/4 m-auto pt-12'>
        <ul>
          {tasks.map((task, index) => 
            <li className='p-3 mb-4 rounded bg-white flex justify-between items-center' key={index}>
              <span className='md:font-medium text-xl'>{task}</span>
              <button className='bg-red-700 text-white p-2 px-6 rounded hover:bg-red-500 duration-100' onClick={() => deleteTask(index)}>Delete</button>
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default App
