import { ITodo, Todo } from "./todo_item";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

let section = document.getElementById("list");
let todu_list : Todo[] = [];

function todo_load(item: Todo){
    let todo_item = document.createElement("div");
    todo_item.className = "todo-item";
    if(item.finished != false){
        todo_item.classList.add("todo-finished");
    }
    let finished_button = document.createElement("i");
    finished_button.className = "iconfont icon-checkbox"
    finished_button.addEventListener("click", ()=>{
        finishitem(item);
    });
    let task = document.createElement("span");
    task.className = "todo-title";
    task.innerText = item.content;
    let ctime = document.createElement("span");
    ctime.innerText = dayjs(item.ctime).format('MM-DD HH:mm:ss').toString();
    ctime.className = "todo-title ctime";
    let del = document.createElement("i");
    del.className = "iconfont icon-delete"
    del.addEventListener("click" ,()=>{
        delitem(item);
    })
    todo_item.appendChild(finished_button);
    todo_item.appendChild(task);
    todo_item.appendChild(ctime);
    todo_item.appendChild(del);
    section.appendChild(todo_item);
    item.el = todo_item;
    return todo_item;
}

function save(){
    localStorage.setItem('todo', JSON.stringify(todu_list));
}

function delitem(item: Todo){
    section.removeChild(item.el);
    let index = todu_list.indexOf(item);
    todu_list.splice(index,1);
    save();
}


function finishitem(item : Todo){
    item.finished = !item.finished;
    if(item.finished === true){
        item.el.classList.add("todo-finished");
    }
    else{
        item.el.classList.remove("todo-finished");
    }
    item.mtime = new Date().getTime();
    save();
}

function addItem(item: Todo, isInlist){
    todo_load(item);
    todu_list.push(item);
    if(!isInlist){
        save();
    }
}

function changevalue(){
    var input = document.getElementsByClassName("input")[0] as HTMLInputElement;
    input.setAttribute("value",input.value);
}

var input = document.getElementsByClassName("input")[0] as HTMLInputElement;
input.addEventListener("input",changevalue);
input.addEventListener("keypress",(e)=>{
    // console.log(e.keyCode);
    if(e.key === 'Enter' && input.value !== ''){
        let new_item = new Todo({
            id: nanoid(),
            content: input.value,
            finished: false,
            ctime: new Date().getTime(),
            mtime: new Date().getTime()
        })
        addItem(new_item, false);
        input.value = "";
    }
})
let items :ITodo[] = [];
if(localStorage.getItem("todo")){
    items = JSON.parse(localStorage.getItem("todo"));
}
for (let item of items) {
    let todo = new Todo(item)
    addItem(todo, true)
  }
