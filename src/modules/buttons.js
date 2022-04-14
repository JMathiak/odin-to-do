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
  let taskModal = document.getElementById("taskModal");
  let taskButton = document.getElementById("newTaskBtn");
  let editModal = document.getElementById("editModal");
  let projectModal = document.getElementById("projectModal");
  let addProj = document.getElementById("newProject");
  let sortModal = document.getElementById("sortModal");
  addProj.onclick = function () {
    projectModal.style.display = "block";
  };
  taskButton.onclick = function () {
    taskModal.style.display = "block";
  };
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
  };
  let submitbutton = document.getElementById("submit-task-btn");
  submitbutton.onclick = function () {
    addToDo();
    let modal = document.getElementById("taskModal");
    modal.style.display = "none";
    document.getElementById("taskNameInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("priorityInput").selectedIndex = 0;
  };

  // let sortButton = document.getElementById("sortTaskBtn");
  // sortButton.onclick = function () {
  //   let sortModal = document.getElementById("sortModal");
  //   sortModal.style.display = "block";
  // };

  let submitSortBtn = document.getElementById("submit-sort-btn");
  submitSortBtn.onclick = function () {
    let sortType = document.getElementById("sortType").value;
    sortContent(sortType);
    let sortModal = document.getElementById("sortModal");
    sortModal.style.display = "none";
    document.getElementById("sortType").selectedIndex = 0;
  };

  let sortSelect = document.getElementById("sortType");
  sortSelect.onchange = function () {
    console.log("here");
    let sortType = sortSelect.value;
    sortContent(sortType);
  };

  let addProjBtn = document.getElementById("submit-project-btn");
  addProjBtn.onclick = function () {
    addProject();
    projectModal.style.display = "none";
    document.getElementById("projectName").value = "";
    renderProjectsForTaskMenus();
  };

  let projectViewBtn = document.getElementById("project-view");
  projectViewBtn.onclick = function () {
    prepareDiv();
  };

  let allTasksButton = document.getElementById("all-tasks");
  allTasksButton.onclick = function () {
    removeHeaders();
    removeProjectRows();
    renderToDos(ToDoList.masterList);
  };

  let completedTaskBtn = document.getElementById("complete-tasks");
  completedTaskBtn.onclick = function () {
    removeHeaders();
    removeProjectRows();
    renderToDos(ToDoList.masterList.filter((task) => task.complete == true));
  };

  let incompleteTaskBtn = document.getElementById("incomplete-tasks");
  incompleteTaskBtn.onclick = function () {
    removeHeaders();
    removeProjectRows();
    renderToDos(ToDoList.masterList.filter((task) => task.complete == false));
  };
};

export default initButtons;
