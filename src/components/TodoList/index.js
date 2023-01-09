import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import styles from './TodosList.module.css';

const TodoList = ({ tasks }) => (
  <section className={styles.todo_tasks_list}>
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} taskTitle={task.title} />
      ))}
    </ul>
  </section>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ).isRequired,
};

export default TodoList;
