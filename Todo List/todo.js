//Model
let todos;
const savedTodo = JSON.parse(localStorage.getItem("todos"));  
//checking if savedTodo is having an array in itself  
if(Array.isArray(savedTodo)){
    todos = savedTodo;
} else {
    todos = [{
    title: "study javascript",
    dueDate: "2023-02-02",
    id: "id1"
},{
    title: "pending linked list lecture",
    dueDate: "2023-03-03",
    id: "id2"
},{
    title: "study for msts",
    dueDate: "2023-04-03",
    id: "id3"
}];
}

//Creates a todo
function createTodo(title , dueDate){
    const id = new Date().getTime();
    todos.push({
        title: title,
        dueDate: dueDate,
        id: id.toString() 
    });
    saveTodo();
}
render();


//deletes a todo
function removeTodo(idToDelete){
    //creates a copy array so we re-assign it to our original hence todos = todos.filter 
    todos = todos.filter(function (todo) {
    //if id of element matches the id in array then return false
    if(todo.id === idToDelete){
        return false;
    } else {
        return true;
    }
    });
    saveTodo();
};

function saveTodo(){
    //JSON.stringify converts our array stored data into string 
    localStorage.setItem("todos",JSON.stringify(todos));
}


//Controller
function addTodo() {
    const textBox = document.getElementById("todo-title");
    const title = textBox.value;

    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;
    createTodo(title , dueDate);
    render(); 
};

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    removeTodo(idToDelete);
    render();
}

//view
function render() {
//reset the previous arraylist
document.getElementById("todo-list").innerHTML= "";


todos.forEach(function (todo){
    const element = document.createElement("div");
    element.innerText = todo.title + " " + todo.dueDate;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style = "margin-left: 12px;";

    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton)

    const todoList = document.getElementById("todo-list")
    todoList.appendChild(element);
});
}