import { useState, useEffect } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');


  // handle refreshed the page wont remove the todo list
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }


// to handle add new todo list 
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  // Edit Todo
  function handleEditTodo(index) {
    // deleted the i selected and rename it 
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  // Delete Todo
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      // if the todoIndex equal index, it will excluded
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  

  // when refresh the page it wont remove the storage
  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      const parsedTodos = JSON.parse(localTodos).todos;
      setTodos(parsedTodos);
    }
  }, []);


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
      
    </>
  );
}

export default App;
