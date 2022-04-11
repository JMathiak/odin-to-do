import { ToDoList } from "./list";
import { editTask } from "./todo";
const renderToDos = (array) => {
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
};

const renderRow = (i, array) => {
  let tableBody = document.querySelector("#task-table-body");

  //Data key? <-- Need to add the data key to each div.
  let dk = array[i].id;
  let row = document.createElement("tr");
  row.setAttribute("data-key", dk);

  let title = document.createElement("td");
  title.innerHTML = array[i].taskName;
  row.appendChild(title);

  let description = document.createElement("td");
  description.innerHTML = array[i].description;
  row.appendChild(description);

  let dueDate = document.createElement("td");
  dueDate.innerHTML = array[i].dueDate;
  row.appendChild(dueDate);

  let prio = document.createElement("td");
  prio.innerHTML = array[i].priority;
  row.appendChild(prio);

  //Need to create buttons

  let buttons = document.createElement("td");
  let delBtn = document.createElement("button");
  buttons.appendChild(delBtn);
  delBtn.setAttribute("type", "button");
  delBtn.innerHTML = "Delete";
  delBtn.classList.add("del-btn");
  let editBtn = document.createElement("button");
  buttons.appendChild(editBtn);
  editBtn.setAttribute("type", "button");
  editBtn.innerHTML = "Edit";
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
  let filterArr = ToDoList.masterList.filter((task) => task.id != id);
  let lowFilter = ToDoList.lowPrio.filter((task) => task.id != id);
  ToDoList.lowPrio = lowFilter;
  let medFilter = ToDoList.medPrio.filter((task) => task.id != id);
  ToDoList.medPrio = medFilter;
  let highFilter = ToDoList.highPrio.filter((task) => task.id != id);
  ToDoList.highPrio = highFilter;
  ToDoList.masterList = filterArr;
  refreshContent();
};

const refreshContent = () => {
  removeRows();
  renderToDos(ToDoList.masterList);
};

const sortContent = () => {
  if (ToDoList.isSorted === true) {
    removeRows();
    renderToDos(ToDoList.highPrio);
    renderToDos(ToDoList.medPrio);
    renderToDos(ToDoList.lowPrio);
  } else if (ToDoList.isSorted === false) {
    refreshContent();
  }
};
export { renderToDos, refreshContent, sortContent };

//Use query selector to get array of divs that has the data attribute I want to remove
