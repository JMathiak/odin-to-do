import { ToDo } from "./modules/todo";
import { ToDoList } from "./modules/list";
import renderToDos from "./modules/content";
let td1 = new ToDo(
  "Roll for Ayaka",
  "Use all means necessary to pull Ayaka",
  "4/19/22",
  "High"
);
ToDoList.masterList.push(td1);
console.log(ToDoList.masterList);
let td2 = new ToDo("Roll for Yelan", "Pull Yelan bc mommy", "5/10/22", "High");
ToDoList.masterList.push(td2);
renderToDos();

let modal = document.getElementById("taskModal");
let taskButton = document.getElementById("newTaskBtn");

taskButton.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/*
Notes:
-On add task form need a place to select which project to add the to do to. Allow for multiple project selection
-Need an edit task button on each task row
-Need to figure out where to create new projects
-View all tasks needs to display project names

Plan of attack:
-Add a few dummy to do objects and get them rendering to the dom
-Set up the add task button 
-Set up projects
-- Add project button
-- Add project selection on add task form
-- Add project views
- Set up task editing
- Set up sorting 

*/
