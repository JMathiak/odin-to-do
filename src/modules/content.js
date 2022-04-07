import { ToDoList } from "./list";
const renderToDos = () => {
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    renderRow(i);
  }
  const delBtns = document.getElementsByClassName("del-btn");
  console.log(delBtns);
  for (let j = 0; j < delBtns.length; j++) {
    console.log("here");
    delBtns[j].addEventListener("click", removeTask);
  }
};

const renderRow = (i) => {
  let tableBody = document.querySelector("#task-table-body");

  //Data key? <-- Need to add the data key to each div.
  let dk = ToDoList.masterList[i].id;
  let row = document.createElement("tr");
  row.setAttribute("data-key", dk);

  let title = document.createElement("td");
  title.innerHTML = ToDoList.masterList[i].taskName;
  row.appendChild(title);

  let description = document.createElement("td");
  description.innerHTML = ToDoList.masterList[i].description;
  row.appendChild(description);

  let dueDate = document.createElement("td");
  dueDate.innerHTML = ToDoList.masterList[i].dueDate;
  row.appendChild(dueDate);

  let prio = document.createElement("td");
  prio.innerHTML = ToDoList.masterList[i].priority;
  row.appendChild(prio);

  //Need to create buttons

  let buttons = document.createElement("td");
  let delBtn = document.createElement("button");
  buttons.appendChild(delBtn);
  delBtn.setAttribute("type", "button");
  delBtn.innerHTML = "Delete";
  delBtn.classList.add("del-btn");
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
  ToDoList.masterList = filterArr;
  refreshContent();
};

const refreshContent = () => {
  removeRows();
  renderToDos();
};
export { renderToDos, refreshContent };

//Use query selector to get array of divs that has the data attribute I want to remove
