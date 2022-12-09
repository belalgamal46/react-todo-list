import { useRef, useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({ taskTitle }) => {
  const [title, setTitle] = useState(taskTitle);
  const [completed, setCompleted] = useState(false);
  const checkbox = useRef();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = (event) => {
    event.target.closest(`.${styles.todo_task_item}`).remove();
  };

  const handleChecked = () => {
    if (checkbox.current.checked) {
      setCompleted(!completed);
    }
    setCompleted(!completed);
  };

  return (
    <li className={styles.todo_task_item}>
      <input
        type="checkbox"
        name="checkbox"
        id={styles.checkbox}
        ref={checkbox}
        onClick={handleChecked}
      />
      <input
        type="text"
        name="task-title"
        id={styles.task_title}
        value={title}
        onChange={handleChange}
        className={completed ? styles.line_through : ''}
        data-form-type="other"
      />
      <button type="button" id={styles.trash_btn} onClick={handleClick}>
        <IoMdTrash />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  taskTitle: PropTypes.string.isRequired,
};
export default TodoItem;
