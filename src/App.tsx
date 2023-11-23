import { useState } from "react"
import FormAddTodo from "./components/FormAddTodo"

interface todo {
  text: string,
  complete : boolean
}

const initialTodos = [
  {
    text: "Hacer curso",
    complete: true
  },
  {
    text: "Hacer tarea",
    complete: false
  }
]

const App = () => {

  const [todos, setTodos] = useState<todo[]>(initialTodos)

  const handleAddTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false
    }
    setTodos([...todos, newTodo])
  }

  const UpdateTodo = (selectTodo : todo) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo === selectTodo){
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  const deleteTodo = (selectTodo : todo) => {
    setTodos((prev) => {
      return prev.filter((todo)=> todo !== selectTodo)
    })
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo handleAddTodo={handleAddTodo}/>
      <div>
        {todos.map((todo) => (
          <article key={todo.text}>
            <label htmlFor="todo">
              <input type="checkbox" 
              checked={todo.complete} 
              id="todo"
              onChange={() => UpdateTodo(todo)}/>
              {todo.text}
            </label>
            <br />
            <button type="button" className="contrast" onClick={() => deleteTodo(todo)}>Remove</button>
          </article>
        ))}
      </div>
      </div>
  )
}

export default App