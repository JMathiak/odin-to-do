import { renderProjectsForTaskMenus } from "./content";
import { refreshProjects } from "./projectView";
import { logLocal, storeProjects } from "./storage";

const ToDoList = (() => {
  let isSorted = false;
  let viewingProjects = false;
  let masterList = [];
  let lowPrio = [];
  let medPrio = [];
  let highPrio = [];
  let projects = ["None"];
  return {
    masterList,
    lowPrio,
    medPrio,
    highPrio,
    isSorted,
    projects,
    viewingProjects,
  };
})();

//Function to populate the arrays that hold tasks of each priority
const setPrioArrays = () => {
  ToDoList.highPrio = ToDoList.masterList.filter(
    (tasks) => tasks.priority === "High"
  );
  ToDoList.medPrio = ToDoList.masterList.filter(
    (tasks) => tasks.priority === "Medium"
  );
  ToDoList.lowPrio = ToDoList.masterList.filter(
    (tasks) => tasks.priority === "Low"
  );
};

//Function to add a new project to the projects sub-array. Also stores the project in local storage
const addProject = () => {
  let projInput = document.getElementById("projectName").value;
  ToDoList.projects.push(projInput);
  let ind = ToDoList.projects.indexOf(projInput);
  storeProjects(ind, projInput);
  logLocal();
  if (ToDoList.viewingProjects == true) {
    refreshProjects();
  }
};
export { ToDoList, setPrioArrays, addProject };
