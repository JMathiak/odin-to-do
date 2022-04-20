import {
  removeHeaders,
  removeRows,
  renderProjectsForTaskMenus,
} from "./content";
import { ToDoList } from "./list";

//Function that clears content of the table body and table headers. Calls the
// function that renders everything for project view as well.
const prepareDiv = () => {
  removeRows();
  removeHeaders();
  renderProjectHeaders();
  renderProjects();
};

//Function to render the table headers for project view
const renderProjectHeaders = () => {
  let tableDiv = document.getElementById("task-table");
  let projectHeaders = ["Project Name", ""];
  let headerDiv = document.createElement("tr");
  tableDiv.prepend(headerDiv);
  for (let i = 0; i < projectHeaders.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = projectHeaders[i];
    headerDiv.appendChild(th);
  }
};

//Function that calls methods to render each project row and calls functions to
// add functionality to the buttons + links them to the correct row
const renderProjects = () => {
  let tableBody = document.getElementById("task-table-body");

  for (let j = 1; j < ToDoList.projects.length; j++) {
    renderProjectRow(j);
  }

  const deleteButtons = document.getElementsByClassName("del-btn");
  for (let k = 0; k < deleteButtons.length; k++) {
    deleteButtons[k].addEventListener("click", removeProject);
  }

  const editButtons = document.getElementsByClassName("edit-btn");
  for (let l = 0; l < editButtons.length; l++) {
    editButtons[l].addEventListener("click", editProject);
  }
};

//Function that renders each project and the edit and delete buttons
const renderProjectRow = (i) => {
  let tableBody = document.querySelector("#task-table-body");
  let row = document.createElement("tr");
  row.setAttribute("data-key", i);
  row.id = "task-" + i;
  row.classList.add("task-item");

  let projectName = document.createElement("td");
  projectName.innerHTML = ToDoList.projects[i];
  row.appendChild(projectName);

  let buttons = document.createElement("td");
  buttons.id = i;
  buttons.setAttribute("data-key", i);

  let delBtn = document.createElement("button");
  buttons.appendChild(delBtn);
  delBtn.setAttribute("type", "button");
  delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  delBtn.classList.add("del-btn");
  delBtn.id = i;

  let editBtn = document.createElement("button");
  buttons.appendChild(editBtn);
  editBtn.setAttribute("type", "button");
  editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
  editBtn.classList.add("edit-btn");
  editBtn.id = i;

  row.appendChild(buttons);

  tableBody.appendChild(row);
};

//Removes all the rows of the table body
const removeProjectRows = () => {
  let contentDiv = document.querySelector("#task-table-body");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
};

//Removes all projects and re-renders the project array. Used for updating the table
//to match the projects array
const refreshProjects = () => {
  removeProjectRows();
  renderProjects();
};

//Removes the project from the array and local storage and re-renders the table
const removeProject = (e) => {
  let id = e.target.parentNode.id;
  console.log(id);
  let target = ToDoList.projects[id];
  console.log(target);
  let filteredArr = ToDoList.projects.filter((task) => task != target);
  ToDoList.projects = filteredArr;
  refreshProjects();
  let key = "project-" + id;
  localStorage.removeItem(key);
};

// Pulls up the edit project modal and populates the form with the project to be edited.
// When a change is submitted, the entry is changed in the array and the project view table
// is re-rendered.
const editProject = (e) => {
  let modal = document.getElementById("editProjectModal");
  modal.style.display = "block";
  console.log(modal);
  let id = e.target.parentNode.id;
  console.log(e.target.parentNode);
  let oldProjectName = ToDoList.projects[id];

  document.getElementById("editProjectName").value = oldProjectName;

  let saveChangesBtn = document.getElementById("submit-project-edit-btn");
  saveChangesBtn.onclick = function () {
    ToDoList.projects[id] = document.getElementById("editProjectName").value;
    let newProj = document.getElementById("editProjectName").value;
    for (let m = 0; m < ToDoList.masterList.length; m++) {
      if (ToDoList.masterList[m].project === oldProjectName) {
        ToDoList.masterList[m].project = newProj;
      }
    }
    modal.style.display = "none";
    refreshProjects();
    let key = "project-" + id;
    localStorage.removeItem(key);
    localStorage.setItem(key, ToDoList.projects[id]);
  };
};

export { prepareDiv, removeProjectRows, refreshProjects };
