import { ChangeEvent, useState } from "react";

interface Props {
    handleAddTodo:(text:string) => void;
}


const FormAddTodo = ({handleAddTodo}: Props) => {
    
const [text, setText] = useState("");

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
}

const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const TrimText = text.trim()
    if(!TrimText) return
    handleAddTodo(TrimText)
    setText("")
}


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Todo">
        Todo
        <input type="text" 
        id="todo" 
        placeholder="Ingresa todo"
        value={text} 
        onChange={handleChange}/>
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default FormAddTodo;
