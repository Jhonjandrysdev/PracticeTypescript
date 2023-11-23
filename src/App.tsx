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

  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo handleAddTodo={handleAddTodo}/>
      <div>
        {todos.map((todo) => (
          <article key={todo.text}>
            <label htmlFor="todo">
              <input type="checkbox" checked={todo.complete} id="todo"/>
              {todo.text}
            </label>
          </article>
        ))}
      </div>
      </div>
  )
}

export default App