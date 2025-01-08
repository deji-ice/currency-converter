import { useState } from "react";
import TodoInput from "./TodoInput";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editing, setEditing] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: uuidv4(),
        todo: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    const editedTodo = todos.find((todo) => todo.id === id);
    setEditing(true);
    setInputValue(editedTodo.todo);
  };

  const updateTodo = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: inputValue } : todo
    );
    setTodos(updatedTodo);
    setEditing(false);
    setInputValue("");
  };

  return (
    <div>
      <h1>TodoList</h1>
      <TodoInput
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        handleInputChange={handleInputChange}
      />
      <Todos
        updateTodo={updateTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        editing={editing}
        todos={todos}
      />
    </div>
  );
};

export default TodoList;
