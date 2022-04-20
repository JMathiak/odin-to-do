import { ToDoList } from "./list";
import { refreshContent, sortContent } from "./content";
import { storeTask } from "./storage";

const ToDo = function (taskName, description, dueDate, priority, project) {
  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = false;
  this.project = project;
  this.id = Math.floor(Math.random() * 1000);
};

//Fetches the values from the add task modal and creates a new Task and adds it to
// the list of tasks and the correct priority sub-array.
// Calls the correct method to re-render the table based on sorting option and if
// the user is viewing tasks or not.
const addToDo = () => {
  let taskName = document.getElementById("taskNameInput").value;
  let taskDesc = document.getElementById("descriptionInput").value;
  let taskDate = document.getElementById("dateInput").value;
  let taskPrio = document.getElementById("priorityInput").value;
  let taskProj = document.getElementById("projectInput").value;
  let newTask = new ToDo(taskName, taskDesc, taskDate, taskPrio, taskProj);
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
  if (ToDoList.viewingProjects === false) {
    if (ToDoList.isSorted === false) {
      refreshContent();
    } else {
      sortContent();
    }
  }
  let ind = ToDoList.masterList.indexOf(newTask);
  storeTask(ind, newTask);
};

//Opens the edit task modal and queries the master lists of tasks to find the correct task based on ID number.
// Populates the form with the original data. Function also adds the onclick function for the save changes button.
// The onclick function fetches the values from the form and updates the task with the new data.
const editTask = (e) => {
  let modal = document.getElementById("editModal");
  modal.style.display = "block";

  let id = e.target.parentNode.parentNode.getAttribute("data-key");
  let index = 0;
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    if (id == ToDoList.masterList[i].id) {
      index = i;
    }
  }

  document.getElementById("taskNameEdit").value =
    ToDoList.masterList[index].taskName;
  document.getElementById("descriptionEdit").value =
    ToDoList.masterList[index].description;
  document.getElementById("dateEdit").value =
    ToDoList.masterList[index].dueDate;
  document.getElementById("priorityEdit").value =
    ToDoList.masterList[index].priority;
  document.getElementById("projectEdit").value =
    ToDoList.masterList[index].project;

  let saveChangesBtn = document.getElementById("submit-edit-btn");
  saveChangesBtn.onclick = function () {
    ToDoList.masterList[index].taskName =
      document.getElementById("taskNameEdit").value;
    ToDoList.masterList[index].description =
      document.getElementById("descriptionEdit").value;
    ToDoList.masterList[index].dueDate =
      document.getElementById("dateEdit").value;
    ToDoList.masterList[index].priority =
      document.getElementById("priorityEdit").value;
    ToDoList.masterList[index].project =
      document.getElementById("projectEdit").value;
    ToDoList.highPrio = ToDoList.masterList.filter(
      (task) => task.priority === "High"
    );
    ToDoList.medPrio = ToDoList.masterList.filter(
      (task) => task.priority === "Medium"
    );
    ToDoList.lowPrio = ToDoList.masterList.filter(
      (task) => task.priority === "Low"
    );

    refreshContent();
    modal.style.display = "none";
    let key = "task-" + index;
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(ToDoList.masterList[index]));
  };
};

export { ToDo, addToDo, editTask };
