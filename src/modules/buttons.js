import { addToDo } from "./todo";
import { sortContent } from "./content";
import { ToDoList } from "./list";
const initButtons = () => {
  let modal = document.getElementById("taskModal");
  let taskButton = document.getElementById("newTaskBtn");
  let editModal = document.getElementById("editModal");

  taskButton.onclick = function () {
    modal.style.display = "block";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      console.log("close modal");
      modal.style.display = "none";
    }
    if (event.target == editModal) {
      editModal.style.display = "none";
    }
  };
  let submitbutton = document.getElementById("submit-task-btn");
  submitbutton.onclick = function () {
    addToDo();
    let modal = document.getElementById("taskModal");
    modal.style.display = "none";
    document.getElementById("taskNameInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("priorityInput").selectedIndex = 0;
  };

  let sortButton = document.getElementById("sortTaskBtn");
  sortButton.onclick = function () {
    ToDoList.isSorted = !ToDoList.isSorted;
    console.log(ToDoList.isSorted);
    sortContent();
  };
};

export default initButtons;
