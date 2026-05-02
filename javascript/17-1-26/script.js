const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const outputBox = document.querySelector(".inputBox");

function getValue(){
    outputBox.innerHTML += input.value+" ";
    input.value = "";
}

btn.addEventListener('click', getValue);

input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter') getValue();
})