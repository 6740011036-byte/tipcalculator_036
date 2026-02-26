"use client"
import { type ChangeEventHandler, useState , useEffect} from 'react'

interface TodoFormProps {
  addTodo: (todo: string) => void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState('')
  const handleTodoFormChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value)
  }
  const handleAddTodo = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <input type="text" onChange={handleTodoFormChanged} value={todo} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  )
}

const useFetch = <T,>(url : string) => {
    const [data, setData] = useState<T[]>([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      };
      fetchData();
    },[url]);

  return data;
}

  

interface Todo {
  id: number;
  content: string;
}

interface TodoListProps {
  todos: Todo[]
}




const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.content}</li>)
      }
    </ul>
  )
}

const IndexPage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    
  ])
const api = useFetch<T,>('https://jsonplaceholder.typicode.com/todos')
 useEffect(() => {
  setTodos(api.map(item => ({
    id: item.id,
    content: item.title
  })))
}, [api])
  
  const addTodo = (todo: string) => {
    setTodos([{ id: todos.length + 1, content: todo }, ...todos])
    
  }

  return (
    <>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
    </>
  )
}

export default IndexPage