const ToDoList = (() => {
  let isSorted = false;
  let masterList = [];
  let lowPrio = [];
  let medPrio = [];
  let highPrio = [];
  let projects = ["None", "Pulls", "Ascension"];
  return { masterList, lowPrio, medPrio, highPrio, isSorted, projects };
})();

export { ToDoList };
