//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");




//Event Listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


//Functions
function addTodo(Event){
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //complete button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TODO LIST
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value="";
}

function deleteCheck(Event){
    const item = event.target;
    if(item.classList[0] === "trash-btn"){
       const todo = item.parentElement;
       //animation
       todo.classList.add("fall");
       todo.addEventListener("transitionend",function(){
        todo.remove();
       });
    }

    //Check Mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}



