import { ToDoList } from "./list";
import { ToDo } from "./todo";

// Helper function to store projects in local storage.
const storeProjects = (ind, input) => {
  let key = "project-" + ind;
  localStorage.setItem(key, input);
};

// Helper function to store tasks in local storage
const storeTask = (ind, input) => {
  let key = "task-" + ind;
  let strung = JSON.stringify(input);
  localStorage.setItem(key, strung);
};

// Populates the necessary arrays when page is loaded.
const getStorage = () => {
  Object.keys(localStorage).forEach(function (key) {
    if (key.includes("task")) {
      const obj = JSON.parse(localStorage.getItem(key));
      let restoreTask = new ToDo(
        obj.taskName,
        obj.description,
        obj.dueDate,
        obj.priority,
        obj.project
      );
      ToDoList.masterList.push(restoreTask);
    }
    if (key.includes("project")) {
      ToDoList.projects.push(localStorage.getItem(key));
    }
  });
};
export { storeProjects, storeTask, getStorage };
