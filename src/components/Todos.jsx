import { CgClose } from "react-icons/cg";
import PropTypes from "prop-types";
const Todos = ({ todos, deleteTodo, editTodo, updateTodo, editing }) => {
  return (
    <div className="flex flex-col">
      {todos.map((todo) => (
        <span key={todo.id} className="flex  gap-5 items-center">
          {todo.todo} <CgClose onClick={() => deleteTodo(todo.id)} />
          {editing ? (
            <button onClick={() => updateTodo(todo.id)}>Update</button>
          ) : (
            <button onClick={() => editTodo(todo.id)}>Edit</button>
          )}
        </span>
      ))}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  editing: PropTypes.bool,
};

export default Todos;
