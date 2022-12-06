import React, { useState } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import InputTodo from '../InputTodo';
import TodosList from '../TodosList';
import './TodoContainer.css';

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const handleTasksChange = async (title) => {
    const newItemId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newItem = { title, id: newItemId };
    setTasks((prevState) => [...prevState, newItem]);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Header />
        <InputTodo handleTasksChange={handleTasksChange} />
        <TodosList tasks={tasks} />
      </main>
    </>
  );
};

export default TodoContainer;
