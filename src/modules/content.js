import { ToDoList } from "./list";
const renderToDos = () => {
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    renderRow(i);
  }
};

const renderRow = (i) => {
  let tableBody = document.querySelector("#todo-table-body");
  let row = document.createElement("tr");

  //Data key?

  tableBody.appendChild(row);

  let title = document.createElement("td");
  title.innerHTML = ToDoList.masterList[i].taskName;
  console.log(ToDoList.masterList[i]);
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
};

export default renderToDos;
