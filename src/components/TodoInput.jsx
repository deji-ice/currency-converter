import { LuCircle } from "react-icons/lu";
import PropTypes from "prop-types";

const TodoInput = ({ handleInputChange, addTodo }) => {
  return (
    <div className="bg-white rounded-lg gap-2 flex items-center justify-around px-2 w-full">
      <LuCircle onClick={addTodo} className="text-2xl text-gray-300" />
      <input
        onChange={handleInputChange}
        className="w-full h-10 pl-2"
        type="text"
        placeholder="Add a new task..."
      />
    </div>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func,
  handleInputChange: PropTypes.func,
};

export default TodoInput;
