import TodoItem from './TodoItem';
import './TodosList.css';

const TodoList = ({ tasks }) => {
  return (
    <section className="todo-tasks-list">
      <ul>
        {tasks.map((task) => {
          return <TodoItem key={task.id} taskTitle={task.title} task={task} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
