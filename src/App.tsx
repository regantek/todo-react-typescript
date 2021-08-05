import React,{useState} from 'react';
import TodoList from './TodoList';





const initialTodo:Array<Todo> = [
  {text:"Walk the dog",complete: true},
  {text: "Write app",complete: false},
  {text: "Watching movie",complete: false},
]

const App:React.FC = () => {
const [todos, setTodos] = useState(initialTodo)

const toggleTodo:ToggleTodo = selectedTodo => {
  const newTodos = todos.map(todo =>{
    if(todo === selectedTodo){
      return {
        ...todo,
        complete: !todo.complete
      };
    }
    return todo;
  })
  setTodos(newTodos);
}
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
