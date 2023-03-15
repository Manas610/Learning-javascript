let x = document.getElementById("count-pass").innerHTML;

function increment() {
    x = parseInt(x) + 1;
    document.getElementById("count-pass").innerHTML = x;
}

function decrement(){
    if(x>0){
    x = parseInt(x) - 1;
    }
    document.getElementById("count-pass").innerHTML = x;
}

function reset() {
    x = 0;
    document.getElementById("count-pass").innerHTML = x;
}

function save() {
    
}


