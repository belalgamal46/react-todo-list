import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodosList.css';

const TodoList = ({ tasks }) => (
  <section className="todo-tasks-list">
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} taskTitle={task.title} />
      ))}
    </ul>
  </section>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
};

export default TodoList;
