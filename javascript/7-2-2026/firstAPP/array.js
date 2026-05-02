const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const outputBox = document.querySelector(".outputBox");
const todoArr = [];
const todoState = [];

function checkValid(flagValue){

    if (flagValue === ''){
        alert("wrong input!!");
        input.value="";
        return false;
    }

    for(let i=0;i<todoArr.length;i++){
        if(todoArr[i]==flagValue){
        alert("Value Exists!!");
        input.value="";
        return false;
    }
    }

    return true;
}

function deleteTodo(n){
    todoArr.splice(n,1);
    todoState.splice(n,1);
    getRender();
}

function toggleTodo(n){
    let toggleBtn = document.querySelector(`#toggleBtn${n}`);
    toggleBtn.textContent=(toggleBtn.textContent=== "Done")?"Incomplete":"Done";
    todoState[n]=!todoState[n];
    
}

function getRender(){
    outputBox.innerHTML="";
    for(let i=0;i<todoArr.length;i++){
        outputBox.innerHTML+= `<div class="todoItem">
        <span class="todoName" id="todoName${i}">${todoArr[i]}</span>
        <button class = "deleteBtn" id="deleteBtn${i}" onclick= "deleteTodo(${i})">Delete</button>
        <button class = "toggleBtn" id="toggleBtn${i}" onclick= "toggleTodo(${i})">Done</button>
        </div>`
    }
}

function addTodo(){
    let flagValue = input.value.trim();
    
    if(!checkValid(flagValue)) return;

    todoArr.push(flagValue);
    todoState.push(false);

    getRender();
    input.value="";

}

btn.addEventListener('click', addTodo);

input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter') addTodo();
})