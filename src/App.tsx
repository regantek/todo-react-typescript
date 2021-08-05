import React,{useState} from 'react';
import { TodoListItem } from './TodoListItem';




const initialTodo:Array<Todo> = [
  {text:"walk the dog",complete: true},
  {text: "Write app",complete: false}
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
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
