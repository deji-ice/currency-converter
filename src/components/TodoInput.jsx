import { LuCircle } from "react-icons/lu";

const TodoInput = () => {
  return (
    <div className="bg-white rounded-lg gap-2 flex items-center justify-around px-2 w-full">
      <LuCircle className="text-2xl text-gray-300" />
      <input
        className="w-full h-10 pl-2"
        type="text"
        placeholder="Add a new task..."
      />
    </div>
  );
};

export default TodoInput;
