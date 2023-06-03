

/*let button = document.getElementById('addtodo');
let showlist = document.getElementById('display');
let userinput = document.getElementById('inputfield');




button.addEventListener('click', function(){


    
    if(userinput.value === ''){
        alert('type something!')
    }
    else if(userinput.value.length < 3){
        alert('enter more characters')
    }
    else{
        
    let li = document.createElement('li')
    li.innerHTML = userinput.value
    showlist.appendChild(li)
    }


})
userinput.value = "";*/




const text = document.getElementById("text");//userinput text
const addTaskButton = document.getElementById("add-task-btn");//add button
const saveTaskButton = document.getElementById("save-todo-btn");//save what is added from input
const listBox = document.getElementById("listBox");//display list
const saveInd = document.getElementById("saveIndex");//save input entered
const sortout = document.getElementById('sort');

let todoArray = []

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todolist = localStorage.getItem("todolist");
    if (todolist === null) {
      todoArray =[];
    }
    
    else {
      todoArray = JSON.parse(todolist);
    }
    todoArray.push(text.value);
    text.value = "";
    localStorage.setItem("todolist", JSON.stringify(todoArray));
    displayTodo();
   });

   function displayTodo() {
    let todolist = localStorage.getItem("todolist");
    if (todolist === null) {
      todoArray =[];
    } else {
      todoArray = JSON.parse(todolist);
    }
    
    //prevents it from duplicating
    listBox.innerHTML = "";
    todoArray.forEach((list, ind) => {
      listBox.innerHTML += `
      <div>
      <p>${list}</p>
      <button onclick='edit(${ind})' class='edit'>Edit</button>
      <button onclick='deleteTodo(${ind})' class='delete'>Delete</button>
   </div>`;
    });
    
   }

   function deleteTodo(ind) {
    let todolist = localStorage.getItem("todolist");
    todoArray = JSON.parse(todolist);
    todoArray.splice(ind, 1);
    localStorage.setItem("todolist", JSON.stringify(todoArray));
    displayTodo();
   }

   function edit(ind) {
    saveInd.value = ind;
    let todolist = localStorage.getItem("todolist");
    todoArray = JSON.parse(todolist);
    text.value = todoArray[ind];
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";
   }


   saveTaskButton.addEventListener("click", () => {
    let todolist = localStorage.getItem("todolist");
    todoArray = JSON.parse(todolist);
    let id = saveInd.value;
    todoArray[id] = text.value;
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    text.value = "";
    localStorage.setItem("todolist", JSON.stringify(todoArray));
    displayTodo();
   });

   document.addEventListener('DOMContentLoaded', () => {
    const dom = localStorage.getItem("todolist");
    if(dom) {
        todolist = JSON.parse(dom);
        todolist.forEach((d) => {
            displayTodo(d)
        });
    }
})

   
 

   //load task from local storage when page loads to listen to the evnt
  /* button.addEventListener('click', addTask)

   load task from local storage when page loads
   document.addEventListener('DOMContentLoaded', loadtasks)

   function to add atsk
   function addTask(){
    GET task from the input
    const task = taskInput.value.trim()
    return if task empty

   }

   save task to localstorage from line42 


   saveTask()
   taskInput.value =''

   function saveTask(){
    get task from list
    const task = Array.from(li).map((item) => item.innerHTML)//everything in the li , use map to loop thorugh//
    store all items in array in  local storage as strings
    localStorage.setItem('tasks', JSON.stringify(tasks))
   }


   load tasks from local storage
   function loadtasks(){
    get taks from local storage
    const savedTasks = localStorage.getItem('tasks')

    return if there are no tasks 
    if(!savedTasks){
        return null
    }
    parse json to convert to object

   }*/


