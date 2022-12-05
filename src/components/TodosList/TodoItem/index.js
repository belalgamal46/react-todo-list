import { useRef, useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ taskTitle, task }) => {
  const [title, setTitle] = useState(taskTitle);
  const [completed, setCompleted] = useState(false);
  const checkbox = useRef();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = (event) => {
    event.target.closest('.todo-task-item').remove();
  };

  const handleChecked = () => {
    checkbox.current.checked ? setCompleted(!completed) : setCompleted(!completed);
  };

  return (
    <li className="todo-task-item">
      <input type="checkbox" name="checkbox" id="checkbox" ref={checkbox} onClick={handleChecked} />
      <input
        type="text"
        name="task-title"
        id="task-title"
        value={title}
        onChange={handleChange}
        className={completed ? 'line-through' : ''}
      />
      <button type="button" id="trash-btn" onClick={handleClick}>
        <img src="images/trash-icon.png" alt="trash-icon" />
      </button>
    </li>
  );
};

export default TodoItem;
