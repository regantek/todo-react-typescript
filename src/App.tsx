import React,{useState} from 'react';
import { TodoListItem } from './TodoListItem';




const initialTodo:Array<Todo> = [
  {text:"walk the dog",complete: true},
  {text: "Write app",complete: false}
]

const App:React.FC = () => {
const [todos, setTodos] = useState(initialTodo)
  return (
    <>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </>
  );
}

export default App;
