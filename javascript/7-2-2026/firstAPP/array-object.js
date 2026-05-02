const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const outputBox = document.querySelector(".outputBox");
const todoArr = [];

function checkValid(flagValue){

    if (flagValue === ''){
        alert("wrong input!!");
        input.value="";
        return false;
    }

    for(let i=0;i<todoArr.length;i++){
        if(todoArr[i].title==flagValue){
        alert("Value Exists!!");
        input.value="";
        return false;
    }
    }

    return true;
}

function deleteTodo(n){
    todoArr.splice(n,1);
    getRender();
}

function toggleTodo(n){
    todoArr[n].completed = !todoArr[n].completed;
    getRender();
}

function getRender(){
    outputBox.innerHTML = "";

    for(let i = 0; i < todoArr.length; i++){
        outputBox.innerHTML += `
        <div class="todoItem">
            <span class="todoName ${todoArr[i].completed ? 'done' : ''}">
                ${todoArr[i].title}
            </span>
            <button class="deleteBtn" onclick="deleteTodo(${i})">Delete</button>
            <button class="toggleBtn" onclick="toggleTodo(${i})">
                ${todoArr[i].completed ? "Incomplete" : "Done"}
            </button>
        </div>`;
    }
}

function addTodo(){
    let flagValue = input.value.trim();
    
    if(!checkValid(flagValue)) return;

    todoArr.push({
            title: flagValue,
            completed: false
        })

    getRender();
    input.value="";

}

btn.addEventListener('click', addTodo);

input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter') addTodo();
})