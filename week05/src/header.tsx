import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./utils"

export default function Header(props: any){
  const [value, setvalue] = useState("")
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value)
  }
  const { addItem } = props

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && value !== ''){
      const todo = new Todo({
        id: nanoid(),
        content: value,
        finished: false,
        ctime: new Date().getTime(),
        mtime: new Date().getTime()
      })
      addItem(todo, false)
      setvalue("")
    }
    
  }

  return <header>
  <div className="title">Todo list</div>
  <input 
    type="text" 
    className="input" 
    placeholder="What needs to be done?" 
    autoComplete = "off" 
    value={value} 
    onChange = {(e) => {
      inputChange(e)
    }}
    onKeyDown = {(e) => {
        addTodo(e)
    }}
    />
</header>

}



