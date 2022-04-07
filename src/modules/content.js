import { ToDoList } from "./list";
const renderToDos = () => {
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    renderRow(i);
  }
};

const renderRow = (i) => {
  let div = document.querySelector(".content");

  //Data key?

  let title = document.createElement("div");
  title.innerHTML = ToDoList.masterList[i].taskName;
  console.log(ToDoList.masterList[i]);
  div.appendChild(title);

  let description = document.createElement("div");
  description.innerHTML = ToDoList.masterList[i].description;
  div.appendChild(description);

  let dueDate = document.createElement("div");
  dueDate.innerHTML = ToDoList.masterList[i].dueDate;
  div.appendChild(dueDate);

  let prio = document.createElement("div");
  prio.innerHTML = ToDoList.masterList[i].priority;
  div.appendChild(prio);
};

export default renderToDos;
