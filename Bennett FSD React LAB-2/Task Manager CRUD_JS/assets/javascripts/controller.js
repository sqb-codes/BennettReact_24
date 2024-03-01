import taskObject from "./model.js";

let taskId = 0;
document.querySelector("#add").addEventListener("click", addTask);
// let btn = document.querySelector("#add");
// console.log(btn);


function addTask() {
    let taskTitle = document.querySelector("#box-1").value;
    let taskDesc = document.querySelector("#box-2").value;
    taskId++;
    const table = document.querySelector("#task-table");
    let row = table.insertRow();    // creates <tr> tag
    let taskIDCol = row.insertCell();    // creates <td> tag
    taskIDCol.innerText = taskId;
    let taskTitleCol = row.insertCell();
    taskTitleCol.innerText = taskTitle;
    let taskDescCol = row.insertCell();
    taskDescCol.innerText = taskDesc;
    let taskDateCol = row.insertCell();
    let taskDate = new Date();
    taskDateCol.innerText = taskDate;
    let taskStatusCol = row.insertCell();
    taskStatusCol.innerText = "Open";
    taskObject.addTask(taskId, taskTitle, taskDesc, taskDate);
}