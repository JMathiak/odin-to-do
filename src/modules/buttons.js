import { addToDo } from "./todo";

const initButtons = () => {
  let modal = document.getElementById("taskModal");
  let taskButton = document.getElementById("newTaskBtn");

  taskButton.onclick = function () {
    modal.style.display = "block";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
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
};

export default initButtons;
