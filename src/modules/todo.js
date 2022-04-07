import { ToDoList } from "./list";
import { refreshContent, sortContent } from "./content";

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
  if (newTask.priority === "Low") {
    ToDoList.lowPrio.push(newTask);
  }

  if (newTask.priority === "Medium") {
    ToDoList.medPrio.push(newTask);
  }

  if (newTask.priority === "High") {
    ToDoList.highPrio.push(newTask);
  }
  console.log(ToDoList.isSorted);
  if (ToDoList.isSorted === false) {
    refreshContent();
  } else {
    sortContent();
  }
};

export { ToDo, addToDo };
//How to handle projects?
//Have an overacrching array that holds objects and subarrays for each project? <-- Seems likely
// Have an overarching array and filter when necessary for projects
