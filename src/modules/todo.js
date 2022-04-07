import { ToDoList } from "./list";
import { refreshContent } from "./content";

const ToDo = function (taskName, description, dueDate, priority) {
  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = false;
  this.projects = ["default"];
  this.id = Math.floor(Math.random() * 1000);
};

const addToDo = () => {
  let taskName = document.getElementById("taskNameInput").value;
  let taskDesc = document.getElementById("descriptionInput").value;
  let taskDate = document.getElementById("dateInput").value;
  let taskPrio = document.getElementById("priorityInput").value;

  let newTask = new ToDo(taskName, taskDesc, taskDate, taskPrio);
  ToDoList.masterList.push(newTask);

  refreshContent();
};

export { ToDo, addToDo };
//How to handle projects?
//Have an overacrching array that holds objects and subarrays for each project? <-- Seems likely
