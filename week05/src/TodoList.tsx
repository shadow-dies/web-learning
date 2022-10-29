import React from "react"
import TodoItem from "./todo-item"
import { Todo } from "./utils"

export default function TodoLists(props: any){
  const { todos, finishItem, deleteItem } = props
  return <section>
    {
      todos.filter((todo:Todo) => { return !todo.finished }).map( (todo: Todo) => {
        return (<TodoItem key={todo.id} todo = {todo} deleteItem = {deleteItem} finishItem = { finishItem }></TodoItem>)
      })
    }
    {
      todos.filter((todo:Todo) => { return todo.finished }).map( (todo: Todo) => {
        return (<TodoItem key={todo.id} todo = {todo} deleteItem = {deleteItem} finishItem = { finishItem }></TodoItem>)
      })
    }
  </section>
}

