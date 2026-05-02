const valueBox = document.querySelector('span');
const decrementBtn = document.querySelector('#btn1');
const resetBtn = document.querySelector('#btn2');
const incrementBtn = document.querySelector('#btn3')

let count = 0;

                                        //functions

function increment() {
    valueBox.innerHTML = ++count;
    (count>0)?valueBox.setAttribute("style", "color:green"):(count===0)?valueBox.setAttribute("style", "color:grey"):"";
}

function decrement() {
    valueBox.innerHTML = --count;
    (count<0)?valueBox.setAttribute("style", "color:red"):(count===0)?valueBox.setAttribute("style", "color:grey"):"";
}
function reset() {
    count=0;
    valueBox.innerHTML = count;
    valueBox.setAttribute("style", "color:grey");
}

                                    //eventListners

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);