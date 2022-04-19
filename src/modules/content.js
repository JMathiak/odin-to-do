import { setPrioArrays, ToDoList } from "./list";
import { editTask, ToDo } from "./todo";
const renderToDos = (array) => {
  let headerArr = [
    "Task Name",
    "Description",
    "Project",
    "Due Date",
    "Priority",
    "",
  ];
  let taskHeader = document.getElementById("task-table");
  let headerDiv = document.createElement("tr");
  taskHeader.prepend(headerDiv);
  for (let s = 0; s < headerArr.length; s++) {
    let th = document.createElement("th");
    th.innerHTML = headerArr[s];
    headerDiv.appendChild(th);
  }
  for (let i = 0; i < array.length; i++) {
    renderRow(i, array);
  }
  const delBtns = document.getElementsByClassName("del-btn");
  console.log(delBtns);
  for (let j = 0; j < delBtns.length; j++) {
    console.log("here");
    delBtns[j].addEventListener("click", removeTask);
  }

  const editBtns = document.getElementsByClassName("edit-btn");
  for (let k = 0; k < editBtns.length; k++) {
    editBtns[k].addEventListener("click", editTask);
  }

  const completeBtns = document.getElementsByClassName("comp-btn");
  for (let l = 0; l < completeBtns.length; l++) {
    console.log(completeBtns[l].id);
    let btnId = completeBtns[l].id;
    completeBtns[l].addEventListener("click", completeTask);
  }
};

const renderRow = (i, array) => {
  let tableBody = document.querySelector("#task-table-body");

  //Data key? <-- Need to add the data key to each div.
  let dk = array[i].id;
  let row = document.createElement("tr");
  if (array[i].complete == true) {
    row.classList.add("complete");
  }
  row.setAttribute("data-key", dk);
  row.id = "task-" + dk;
  row.classList.add("task-item");
  let title = document.createElement("td");
  title.innerHTML = array[i].taskName;
  row.appendChild(title);

  let description = document.createElement("td");
  description.innerHTML = array[i].description;
  row.appendChild(description);

  let project = document.createElement("td");
  project.innerHTML = array[i].project;
  row.appendChild(project);

  let dueDate = document.createElement("td");
  let splitDate = array[i].dueDate.split("-");
  let formattedDate = splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
  dueDate.innerHTML = formattedDate;
  row.appendChild(dueDate);

  let prio = document.createElement("td");
  prio.innerHTML = array[i].priority;
  row.appendChild(prio);

  //Need to create buttons

  let buttons = document.createElement("td");
  buttons.setAttribute("data-key", dk);
  let delBtn = document.createElement("button");
  let compBtn = document.createElement("button");
  buttons.appendChild(compBtn);
  compBtn.setAttribute("type", "button");
  compBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  compBtn.classList.add("comp-btn");
  compBtn.id = dk;
  buttons.appendChild(delBtn);
  delBtn.setAttribute("type", "button");
  delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  delBtn.classList.add("del-btn");
  let editBtn = document.createElement("button");
  buttons.appendChild(editBtn);
  editBtn.setAttribute("type", "button");
  editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
  editBtn.classList.add("edit-btn");
  row.appendChild(buttons);

  tableBody.appendChild(row);
};

const removeRows = () => {
  let contentDiv = document.querySelector("#task-table-body");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
};

const removeTask = (e) => {
  let id = e.target.parentNode.parentNode.getAttribute("data-key");
  console.log("here", id);
  let ind = ToDoList.masterList.indexOf(
    ToDoList.masterList.find((task) => task.id == id)
  );
  let filterArr = ToDoList.masterList.filter((task) => task.id != id);
  ToDoList.masterList = filterArr;
  setPrioArrays();
  refreshContent();

  let key = "task-" + ind;
  localStorage.removeItem(key);
};

const completeTask = (e) => {
  console.log("Complete Task");
  let id = e.target.parentNode.parentNode.getAttribute("data-key");
  console.log(id);
  let rowId = "[data-key=" + `"` + id + `"]`;
  let row = document.querySelector(rowId);
  console.log(row);
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    if (ToDoList.masterList[i].id == id) {
      if (ToDoList.masterList[i].complete === false) {
        row.classList.add("complete");
        ToDoList.masterList[i].complete = true;
      } else if (ToDoList.masterList[i].complete === true) {
        row.classList.remove("complete");
        ToDoList.masterList[i].complete = false;
      }
    }
  }
  console.log(row.classList);
};

const refreshContent = () => {
  removeRows();
  removeHeaders();
  renderToDos(ToDoList.masterList);
};

const sortContent = (sortType) => {
  removeHeaders();
  if (sortType === "default") {
    removeRows();
    renderToDos(ToDoList.masterList);
  }
  if (sortType === "lowToHigh") {
    removeRows();
    renderToDos(ToDoList.lowPrio);
    renderToDos(ToDoList.medPrio);
    renderToDos(ToDoList.highPrio);
  }

  if (sortType === "highToLow") {
    removeRows();
    renderToDos(ToDoList.highPrio);
    renderToDos(ToDoList.medPrio);
    renderToDos(ToDoList.lowPrio);
  }

  if (sortType === "projectSorting") {
    removeRows();
    for (let i = 0; i < ToDoList.projects.length; i++) {
      let projArr = ToDoList.masterList.filter(
        (tasks) => tasks.project == ToDoList.projects[i]
      );
      console.log(projArr);
      renderToDos(projArr.filter((tasks) => tasks.priority === "High"));
      renderToDos(projArr.filter((tasks) => tasks.priority === "Medium"));
      renderToDos(projArr.filter((tasks) => tasks.priority === "Low"));
    }
  }
};

const renderProjectsForTaskMenus = () => {
  let projectInputDiv = document.getElementById("projectInput");
  let editProjDiv = document.getElementById("projectEdit");
  while (projectInputDiv.childNodes.length > 2) {
    projectInputDiv.removeChild(projectInputDiv.lastChild);
  }
  while (editProjDiv.childNodes.length > 2) {
    editProjDiv.removeChild(editProjDiv.lastChild);
  }
  for (let i = 0; i < ToDoList.projects.length; i++) {
    let opt = document.createElement("option");
    opt.value = ToDoList.projects[i];
    opt.innerHTML = ToDoList.projects[i];
    projectInputDiv.appendChild(opt);
  }
  for (let j = 0; j < ToDoList.projects.length; j++) {
    let opt = document.createElement("option");
    opt.value = ToDoList.projects[j];
    opt.innerHTML = ToDoList.projects[j];
    editProjDiv.appendChild(opt);
  }
};

const removeHeaders = () => {
  let header = document.getElementById("task-table");
  header.removeChild(header.firstChild);
};
export {
  renderToDos,
  refreshContent,
  sortContent,
  renderProjectsForTaskMenus,
  completeTask,
  removeRows,
  removeHeaders,
};

//Use query selector to get array of divs that has the data attribute I want to remove
