import { ToDoList } from "./list";
const renderToDos = () => {
  for (let i = 0; i < ToDoList.masterList.length; i++) {
    renderRow(i);
  }
  let delBtns = document.getElementsByClassName("del-btn");
  console.log(delBtns);
  for (let i = 0; i < delBtns.length; i++) {
    delBtns[i].onclick = function () {
      let rowId = delBtns[i].id;
      let filterArr = ToDoList.masterList.filter((task) => task.id != rowId);
      ToDoList.masterList = filterArr;
      console.log(ToDoList);
      refreshContent();
    };
  }
};

const renderRow = (i) => {
  let contentDiv = document.querySelector(".content");

  //Data key? <-- Need to add the data key to each div.
  let dk = ToDoList.masterList[i].id;

  let title = document.createElement("div");
  title.innerHTML = ToDoList.masterList[i].taskName;
  title.id = dk;
  title.className = "task-content";
  contentDiv.appendChild(title);

  let description = document.createElement("div");
  description.innerHTML = ToDoList.masterList[i].description;
  description.id = dk;
  description.className = "task-content";
  contentDiv.appendChild(description);

  let dueDate = document.createElement("div");
  dueDate.innerHTML = ToDoList.masterList[i].dueDate;
  dueDate.id = dk;
  dueDate.className = "task-content";
  contentDiv.appendChild(dueDate);

  let prio = document.createElement("div");
  prio.innerHTML = ToDoList.masterList[i].priority;
  prio.id = dk;
  prio.className = "task-content";
  contentDiv.appendChild(prio);

  //Need to create buttons

  let buttons = document.createElement("div");
  let delBtn = document.createElement("button");
  buttons.appendChild(delBtn);
  delBtn.setAttribute("type", "button");
  delBtn.id = dk;
  delBtn.innerHTML = "Delete";
  delBtn.className = "del-btn";
  contentDiv.appendChild(buttons);
};

const removeRows = () => {
  let contentDiv = document.querySelectorAll(".task-content");
  console.log(contentDiv);
  contentDiv.forEach((taskElement) => {
    taskElement.remove();
  });

  let btns = document.querySelectorAll(".del-btn");
  btns.forEach((btnElem) => {
    btnElem.remove();
  });
};

const refreshContent = () => {
  removeRows();
  renderToDos();
};
export { renderToDos, refreshContent };

//Use query selector to get array of divs that has the data attribute I want to remove
