document.addEventListener("DOMContentLoaded",()=> {   // ()=> is the same as function() 
    const saved = JSON.parse(localStorage.getItem("tasks")) || []; // check the Local storage for saved tasks
                                                                   //JSON string turns into Java Script array
    saved.forEach (item => renderTask(item.text,item.completed )); // call renderTask for saved tasks to reappear on the page

});

const task = document.getElementById("Task");
const newTask = document.getElementById("addTask");
const clearBtn = document.getElementById("clearComplete");
const container = document.querySelector(".container");

const taskList = document.createElement("ul"); // create ul element to hold li tasks
container.appendChild(taskList);  // appending ul into the div container

function renderTask(text, completed) {  //define the function that has tasks, checkbox, span, delete btn
   const li = document.createElement("li");  // create li element for each task
   const checkBox = document.createElement("input"); // create a checkbox
     checkBox.type = "checkbox"; //shows browser that this a checkbox
     checkBox.checked = completed;  // set as checked if task is completed

const span = document.createElement("span"); // create a span to hold the tasks
    span.innerText = text;                   // fill it with the text
    if (completed) li.classList.add("completed"); //if done - add CSS class


const deleteItem = document.createElement("button"); // create delete btn to remove the task
deleteItem.innerText = "Delete";   // label as Delete
deleteItem.classList.add("deleteBtn");  // for CSS

// assemble the li element
li.appendChild(checkBox);
li.appendChild(span);
li.appendChild(deleteItem);
    taskList.appendChild(li);  // add the new li to ul
}

// Event Delegation for checkbox and Delete btn inside of the task list
taskList.addEventListener("click", function(e) {  //when clicks happens anywhere inside of ul
    const target = e.target;    //get the actual element that was clicked

    if (target.matches("input[type='checkbox']")) {   // if click checkbox
        const li = target.closest("li");    //find the parent li of this checkbox
        li.classList.toggle("completed", target.checked);  //toggle the completed class based on checkbox state
        saveTasks();    //save to Local Storage
    }

    if(target.classList.contains("deleteBtn")) {   // if click Delete btn
        const li = target.closest("li");   // find the parent li of that button
        li.remove();     //remove the task from DOM
        saveTasks();   //save to Local Storage
    }

});

newTask.addEventListener("click", function() {  // when click "add task"
    const text = task.value.trim();             //trim whitespace from input
    if (!text) {                               // if empty - alert
        alert ("Please enter a task.");
        return;
    }
    renderTask(text, false);             // create a new task, marked completed
    task.value = "";                     // clear the input for the new task
    saveTasks();                         // saves to the Local Storage
});


function saveTasks () {                   // saves all of the tasks to Local Storage
    const data = [];                      //Start with an empty array to collect task objects
    document.querySelectorAll("li").forEach(li => {   //select all of the li from the page 
        data.push({
            text:li.querySelector("span").innerText,  //take the task
            completed: li.classList.contains("completed")   //take the completed status
        });
    });
    localStorage.setItem("tasks", JSON.stringify(data)); } //Convert the array to JSON and store under “tasks”



clearBtn.addEventListener("click", () => {    //When click "clear"
        document.querySelectorAll("li.completed").forEach(li => li.remove());   //select all of the completed tasks on the page and remove
        saveTasks();    //save to the Local Storage
    });



    



    

