import './InputTodo.css';
import PropTypes from 'prop-types';

const InputTodo = ({ handleTasksChange }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.children[0].value;
    handleTasksChange(title);
    event.target.reset();
  };

  return (
    <section className="input-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" id="todo-input" placeholder="Add todo..." />
        <button type="submit" id="add-todo-btn">
          <img src="images/add-icon.png" alt="add-icon" />
        </button>
      </form>
    </section>
  );
};

InputTodo.propTypes = {
  handleTasksChange: PropTypes.func.isRequired,
};

export default InputTodo;
