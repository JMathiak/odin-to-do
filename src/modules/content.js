import { ToDoList } from "./list";
const renderToDos = () => {
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    renderRow(i);
  }
};

const renderRow = (i) => {
  let contentDiv = document.querySelector(".content");

  //Data key? <-- Need to add the data key to each div.
  let dk = ToDoList.masterList[i].id;

  let title = document.createElement("div");
  title.innerHTML = ToDoList.masterList[i].taskName;
  console.log(ToDoList.masterList[i]);
  contentDiv.appendChild(title);

  let description = document.createElement("div");
  description.innerHTML = ToDoList.masterList[i].description;
  contentDiv.appendChild(description);

  let dueDate = document.createElement("div");
  dueDate.innerHTML = ToDoList.masterList[i].dueDate;
  contentDiv.appendChild(dueDate);

  let prio = document.createElement("div");
  prio.innerHTML = ToDoList.masterList[i].priority;
  contentDiv.appendChild(prio);
};

export default renderToDos;

//Use query selector to get array of divs that has the data attribute I want to remove
