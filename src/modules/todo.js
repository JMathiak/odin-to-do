import { ToDoList } from "./list";
import { refreshContent, sortContent } from "./content";
import { logLocal, storeTask } from "./storage";

const ToDo = function (taskName, description, dueDate, priority, project) {
  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = false;
  this.project = project;
  this.id = Math.floor(Math.random() * 1000);
};

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
  console.log(ToDoList.isSorted);
  console.log(ToDoList.viewingProjects);
  if (ToDoList.viewingProjects === false) {
    if (ToDoList.isSorted === false) {
      refreshContent();
    } else {
      sortContent();
    }
  }
  let ind = ToDoList.masterList.indexOf(newTask);
  storeTask(ind, newTask);
  logLocal();
};

const editTask = (e) => {
  let modal = document.getElementById("editModal");
  modal.style.display = "block";

  let id = e.target.parentNode.parentNode.getAttribute("data-key");
  let index = 0;
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    console.log("TDL ID", ToDoList.masterList[i].id);
    if (id == ToDoList.masterList[i].id) {
      index = i;
    }
  }

  console.log("id ", id);
  console.log("index ", index);
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
