import { removeHeaders, removeRows } from "./content";
import { ToDoList } from "./list";

const prepareDiv = () => {
  removeRows();
  removeHeaders();
  renderProjectHeaders();
  renderProjects();
};

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
const renderProjects = () => {
  let tableBody = document.getElementById("task-table-body");

  for (let j = 0; j < ToDoList.projects.length; j++) {
    renderProjectRow(j);
  }

  const deleteButtons = document.getElementsByClassName("del-btn");
  for (let k = 0; k < deleteButtons.length; k++) {
    deleteButtons[k].addEventListener("click", removeProject);
  }
};

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

const removeProjectRows = () => {
  let contentDiv = document.querySelector("#task-table-body");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
};

const refreshProjects = () => {
  removeProjectRows();
  renderProjects();
};

const removeProject = (e) => {
  let id = e.target.parentNode.id;
  console.log(id);
  let target = ToDoList.projects[id];
  console.log(target);
  let filteredArr = ToDoList.projects.filter((task) => task != target);
  ToDoList.projects = filteredArr;
  refreshProjects();
};

export { prepareDiv, removeProjectRows };
