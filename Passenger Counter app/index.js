let x = document.getElementById("count-pass").innerHTML
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-pass")

function increment() {
    x = parseInt(x) + 1
    countEl.innerHTML = x
}

function decrement(){
    if(x>0){
    x = parseInt(x) - 1
    }
    countEl.innerHTML = x
}

function reset() {
    x = 0;
    countEl.innerHTML = x
    saveEl.innerHTML = "Previous Entries:"
}

function save() {
    let countStr = x + " - "
    //.textContent because we want spaces that are around " - " which will not be availble with .innerText
    saveEl.textContent += countStr
    x = 0
    countEl.innerHTML = x
}


