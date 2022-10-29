import React, { useState } from "react"
import  ReactDOM  from "react-dom/client"
import "../css/main.css"
import "../css/iconfont.css"
import Header from "./header"
import { ITodo, Todo } from "./utils"
import TodoLists from "./TodoList"

const appDom: HTMLElement = document.getElementById("root") as HTMLElement
const app = ReactDOM.createRoot(appDom)

let items: ITodo[] = []
const newItems :Todo[] = []
if(localStorage.getItem("todo")){
    items = JSON.parse(localStorage.getItem("todo"));
  }

for (const item of items) {
  const todo = new Todo(item)
  newItems.push(todo)
}


const App = function(){
  
  // eslint-disable-next-line prefer-const
  const [TodoList, setTodoList]  = useState(newItems);

  
  console.log(items)

  const save = ( todolist: Todo[]) => {
    console.log("save",TodoList)
    localStorage.setItem('todo', JSON.stringify(todolist));
  }

  const addItem = (item: Todo, isInlist:boolean) => {
    const newList = [...TodoList]
    console.log("add",newList)
    newList.unshift(item)
    setTodoList(newList)
    if(!isInlist){
        save(newList);
    }
  }

  const deleteItem = (item: Todo) => {
    const newList = [...TodoList]
    const index = TodoList.indexOf(item)
    console.log(index)
    newList.splice(index,1)
    setTodoList(newList)
    console.log("new",newList)
    console.log("delete",TodoList)
    save(newList)
  }

  const finishItem = (item: Todo) => {
    const index = TodoList.indexOf(item)
    const newList = [...TodoList]
    newList[index].finished = !newList[index].finished;
    newList[index].mtime = new Date().getTime();
    setTodoList(newList)
    save(newList);

  }
  
  
  


  return(
    <>
      <Header addItem={addItem}></Header>
      <TodoLists todos = {TodoList} deleteItem = {deleteItem} finishItem = { finishItem }></TodoLists>
    </>
  )
}

app.render(<App></App>)
