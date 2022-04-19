import { ToDoList } from "./list";
import { ToDo } from "./todo";

const storeProjects = (ind, input) => {
  let key = "project-" + ind;
  localStorage.setItem(key, input);
};

const storeTask = (ind, input) => {
  let key = "task-" + ind;
  let strung = JSON.stringify(input);
  localStorage.setItem(key, strung);
};

const logLocal = () => {
  let test = localStorage.getItem("task-3");
  console.log(test);
};

const getStorage = () => {
  Object.keys(localStorage).forEach(function (key) {
    console.log(localStorage.getItem(key));
    if (key.includes("task")) {
      const obj = JSON.parse(localStorage.getItem(key));
      console.log(obj);
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
export { storeProjects, storeTask, logLocal, getStorage };
