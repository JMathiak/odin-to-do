import { addToDo } from "./todo";
import {
  removeHeaders,
  renderNewProjects,
  renderProjectsForTaskMenus,
  renderToDos,
  sortContent,
} from "./content";
import { addProject, ToDoList } from "./list";
import { prepareDiv, removeProjectRows } from "./projectView";
const initButtons = () => {
  //Variable setting for all the different HTML components
  let taskModal = document.getElementById("taskModal");
  let taskButton = document.getElementById("newTaskBtn");
  let editModal = document.getElementById("editModal");
  let projectModal = document.getElementById("projectModal");
  let addProj = document.getElementById("newProject");
  let sortModal = document.getElementById("sortModal");
  let editProjModal = document.getElementById("editProjectModal");
  let submitbutton = document.getElementById("submit-task-btn");
  let sortSelect = document.getElementById("sortType");
  let addProjBtn = document.getElementById("submit-project-btn");
  let projectViewBtn = document.getElementById("project-view");
  let allTasksButton = document.getElementById("all-tasks");
  let completedTaskBtn = document.getElementById("complete-tasks");
  let incompleteTaskBtn = document.getElementById("incomplete-tasks");

  // Respective buttons will open their corresponding modals
  addProj.onclick = function () {
    projectModal.style.display = "block";
  };
  taskButton.onclick = function () {
    taskModal.style.display = "block";
  };

  // Clicking outside of modals will close the modals
  window.onclick = function (event) {
    if (event.target == taskModal) {
      console.log("close modal");
      taskModal.style.display = "none";
      document.getElementById("taskNameInput").value = "";
      document.getElementById("descriptionInput").value = "";
      document.getElementById("dateInput").value = "";
      document.getElementById("priorityInput").selectedIndex = 0;
    }
    if (event.target == editModal) {
      editModal.style.display = "none";
    }
    if (event.target == projectModal) {
      projectModal.style.display = "none";
      document.getElementById("projectName").value = "";
    }
    if (event.target == sortModal) {
      sortModal.style.display = "none";
    }
    if (event.target == editProjModal) {
      editProjModal.style.display = "none";
    }
  };

  //Functionality implementation for the button that handles adding a task
  submitbutton.onclick = function () {
    addToDo();
    let modal = document.getElementById("taskModal");
    modal.style.display = "none";
    document.getElementById("taskNameInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("priorityInput").selectedIndex = 0;
  };

  //Implementation of the on change function for the sorting select box
  sortSelect.onchange = function () {
    console.log("here");
    let sortType = sortSelect.value;
    sortContent(sortType);
  };

  // On click function for adding a project
  addProjBtn.onclick = function () {
    addProject();
    projectModal.style.display = "none";
    document.getElementById("projectName").value = "";
    renderProjectsForTaskMenus();
  };

  //Side bar on click functions for changing the views
  projectViewBtn.onclick = function () {
    ToDoList.viewingProjects = true;
    prepareDiv();
  };

  allTasksButton.onclick = function () {
    ToDoList.viewingProjects = false;
    removeHeaders();
    removeProjectRows();
    renderToDos(ToDoList.masterList);
  };

  completedTaskBtn.onclick = function () {
    ToDoList.viewingProjects = false;
    removeHeaders();
    removeProjectRows();
    renderToDos(ToDoList.masterList.filter((task) => task.complete == true));
  };

  incompleteTaskBtn.onclick = function () {
    ToDoList.viewingProjects = false;
    removeHeaders();
    removeProjectRows();
    renderToDos(ToDoList.masterList.filter((task) => task.complete == false));
  };
};

export default initButtons;
