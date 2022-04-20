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
  //Iterates through the array passed to the function and calls the function that will render the object at the index of the array
  for (let i = 0; i < array.length; i++) {
    renderRow(i, array);
  }
  //Iterates through the delete / edit / complete buttons in each row and links them to their respective row
  // and gives them an on click function
  const delBtns = document.getElementsByClassName("del-btn");
  for (let j = 0; j < delBtns.length; j++) {
    delBtns[j].addEventListener("click", removeTask);
  }

  const editBtns = document.getElementsByClassName("edit-btn");
  for (let k = 0; k < editBtns.length; k++) {
    editBtns[k].addEventListener("click", editTask);
  }

  const completeBtns = document.getElementsByClassName("comp-btn");
  for (let l = 0; l < completeBtns.length; l++) {
    let btnId = completeBtns[l].id;
    completeBtns[l].addEventListener("click", completeTask);
  }
};

const renderRow = (i, array) => {
  let tableBody = document.querySelector("#task-table-body");

  let dk = array[i].id; //The data key used to access rows
  //Creates the row tag and checks if the need to add styling for a completed task
  let row = document.createElement("tr");
  if (array[i].complete == true) {
    row.classList.add("complete");
  }
  row.setAttribute("data-key", dk);
  row.id = "task-" + dk;
  row.classList.add("task-item");

  //The following code sections creates the data cells for each part of the task to be displayed
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
  //I wanted to change the way the Date was rendered so I split the string to manipulate how its rendered
  let splitDate = array[i].dueDate.split("-");
  let formattedDate = splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
  dueDate.innerHTML = formattedDate;
  row.appendChild(dueDate);

  let prio = document.createElement("td");
  prio.innerHTML = array[i].priority;
  row.appendChild(prio);

  //Following code section creates the buttons

  //Creates the button cell
  let buttons = document.createElement("td");
  buttons.setAttribute("data-key", dk);

  //Creates the complete button
  let compBtn = document.createElement("button");
  buttons.appendChild(compBtn);
  compBtn.setAttribute("type", "button");
  compBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  compBtn.classList.add("comp-btn");
  compBtn.id = dk;

  //Creates the delete button
  let delBtn = document.createElement("button");
  buttons.appendChild(delBtn);
  delBtn.setAttribute("type", "button");
  delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  delBtn.classList.add("del-btn");

  //Creates the edit button
  let editBtn = document.createElement("button");
  buttons.appendChild(editBtn);
  editBtn.setAttribute("type", "button");
  editBtn.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
  editBtn.classList.add("edit-btn");
  row.appendChild(buttons);

  tableBody.appendChild(row);
};

//Function used to clear the table that is being currently displayed
const removeRows = () => {
  let contentDiv = document.querySelector("#task-table-body");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
};

//On click function for delete task buttons
const removeTask = (e) => {
  //Gets the id by accessing the data key for the row
  let id = e.target.parentNode.parentNode.getAttribute("data-key");

  //Gets the index used with local storage
  let ind = ToDoList.masterList.indexOf(
    ToDoList.masterList.find((task) => task.id == id)
  );
  let key = "task-" + ind;

  //Filters the array, getting rid of the task that matches the ID of the row
  let filterArr = ToDoList.masterList.filter((task) => task.id != id);
  ToDoList.masterList = filterArr;
  setPrioArrays();
  refreshContent();

  localStorage.removeItem(key);
};

//Function used to toggle if a task is complete
const completeTask = (e) => {
  let id = e.target.parentNode.parentNode.getAttribute("data-key");
  let rowId = "[data-key=" + `"` + id + `"]`;
  let row = document.querySelector(rowId);
  //Iterates through all tasks and adds/removes styling used to indicate a task completion
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
};

//Refreshes the table to re-render the table. Used to update the table when changes are made.
const refreshContent = () => {
  removeRows();
  removeHeaders();
  renderToDos(ToDoList.masterList);
};

//Renders the tasks in order of the selected sort type
const sortContent = (sortType) => {
  removeHeaders();
  if (sortType === "default") {
    removeRows();
    renderToDos(ToDoList.masterList);
  }

  //Sorting by priority is done by rendering sub-arrays in a certain order.
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

  //Iterates through the projects array and then the list of tasks only rendering the tasks with matching projects.
  // All tasks will have been iterated by the time iteration is done
  if (sortType === "projectSorting") {
    removeRows();
    for (let i = 0; i < ToDoList.projects.length; i++) {
      let projArr = ToDoList.masterList.filter(
        (tasks) => tasks.project == ToDoList.projects[i]
      );
      renderToDos(projArr.filter((tasks) => tasks.priority === "High"));
      renderToDos(projArr.filter((tasks) => tasks.priority === "Medium"));
      renderToDos(projArr.filter((tasks) => tasks.priority === "Low"));
    }
  }
};

//Updates select boxes when projects have been added/removed.
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

//Removes table headers. Used for switching between task views and viewing projects
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
