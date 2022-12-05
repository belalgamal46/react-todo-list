import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import InputTodo from '../InputTodo';
import TodosList from '../TodosList';
import './TodoContainer.css';

const TodoContainer = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Header />
        <InputTodo />
        <TodosList />
      </main>
    </>
  );
};

export default TodoContainer;
