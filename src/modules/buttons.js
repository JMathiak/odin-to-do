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
  submitbutton.addEventListener("click", addToDo);
};

export default initButtons;
