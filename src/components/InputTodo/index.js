import { IoMdAddCircle } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from './InputTodo.module.css';

const InputTodo = ({ handleTasksChange }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.children[0].value;
    handleTasksChange(title);
    event.target.reset();
  };

  return (
    <section className={styles.input_container}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" id={styles.todo_input} placeholder="Add todo..." required />
        <button type="submit" id={styles.add_todo_btn} title="click to add todo">
          <IoMdAddCircle />
        </button>
      </form>
    </section>
  );
};

InputTodo.propTypes = {
  handleTasksChange: PropTypes.func.isRequired,
};

export default InputTodo;
