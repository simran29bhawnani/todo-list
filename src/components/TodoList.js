import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(todo.text || /^\s*$/.test(todo.text)){
      localStorage.setItem(todo.id, todo.text);
      console.log(localStorage.getItem(todo.text))
    }

    const newTodos = [todo, ...todos]
    setTodos(newTodos);
  }

  const removeTodo= id => {
    localStorage.removeItem(id);
    setTodos([])
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  return(
    <div>
      <h1>What's your plan for today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
        todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
      />
    </div>
  )
}

export default TodoList