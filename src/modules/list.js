const ToDoList = (() => {
  let isSorted = false;
  let masterList = [];
  let lowPrio = [];
  let medPrio = [];
  let highPrio = [];
  let projects = ["None", "Pulls", "Ascension"];
  return { masterList, lowPrio, medPrio, highPrio, isSorted, projects };
})();

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

const addProject = () => {
  let projInput = document.getElementById("projectName").value;
  ToDoList.projects.push(projInput);
};
export { ToDoList, setPrioArrays, addProject };
