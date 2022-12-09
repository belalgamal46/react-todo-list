import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import InputTodo from '../InputTodo';
import TodosList from '../TodosList';
import styles from './TodoContainer.module.css';

const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);
  const handleTasksChange = async (title) => {
    const newItem = { title, id: uuidv4() };
    setTasks((prevState) => [...prevState, newItem]);
  };

  return (
    <>
      <main className={styles.main}>
        <Header />
        <InputTodo handleTasksChange={handleTasksChange} />
        <TodosList tasks={tasks} />
      </main>
    </>
  );
};

export default TodoContainer;
