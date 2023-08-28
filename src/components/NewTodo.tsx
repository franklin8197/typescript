import React from 'react';
import classes from './NewTodo.module.css'
import { TodosContext } from '../store/todos-context';

const NewTodo:React.FC = () => {
    const todoTextInputRef = React.useRef<HTMLInputElement>(null)
    // React.FormEvent is a inbuilt annotation for form
    const todoCtx = React.useContext(TodosContext)
    const submitHandler = (event: React.FormEvent)=>{
      event.preventDefault()
      const enteredText = todoTextInputRef.current!.value
    //   !-defines that the value will not be null 100%
    if(enteredText.trim.length === 0){
        return
    }
    todoCtx.addTodos(enteredText)
    }
    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo