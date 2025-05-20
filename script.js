const task = document.getElementById("Task");
const newTask = document.getElementById("addTask");

const container = document.querySelector(".container");
const taskList = document.createElement("ul");
container.appendChild(taskList);


newTask.addEventListener("click", function() {
    const taskL = task.value.trim();
    if (taskL === "" ) {
        alert ("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerText = taskL;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("complete-checkbox");

    checkBox.addEventListener("change", function() {
        li.classList.toggle("completed", checkBox.checked);
    });

    const span = document.createElement("span");


    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });
    
const deleteItem = document.createElement("button");
deleteItem.innerText = "Delete";
deleteItem.classList.add("deleteBtn");

deleteItem.addEventListener("click", function(event){
    event.stopPropagation();
    li.remove();

});
li.appendChild(checkBox);
li.appendChild(span);


li.appendChild(deleteItem);
    taskList.appendChild(li);
    task.value = "";
});
