import React from "react";
import dayjs from "dayjs"


export default function TodoItem( props: any ){
  const { todo, finishItem, deleteItem } = props
  return <div className = {todo.finished ? "todo-item todo-finished" : " todo-item "}>
    <i className = "iconfont icon-checkbox" onClick={() => { finishItem( todo ) }}></i>
    <span className = "todo-title">
      { todo.content }
    </span>
    <span className="todo-title ctime">
      { dayjs(todo.ctime).format('MM-DD HH:mm:ss').toString() }
    </span>
    <i className = "iconfont icon-delete" onClick={ () => { deleteItem( todo ) } }></i>
  </div>
} 