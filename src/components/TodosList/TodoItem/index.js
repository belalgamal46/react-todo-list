import { useRef, useState } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

const TodoItem = ({ taskTitle }) => {
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
    if (checkbox.current.checked) {
      setCompleted(!completed);
    }
    setCompleted(!completed);
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
        data-form-type="other"
      />
      <button type="button" id="trash-btn" onClick={handleClick}>
        <img src="images/trash-icon.png" alt="trash-icon" />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  taskTitle: PropTypes.string.isRequired,
};
export default TodoItem;
