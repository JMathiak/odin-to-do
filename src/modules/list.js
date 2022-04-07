const ToDoList = (() => {
  let isSorted = false;
  let masterList = [];
  let lowPrio = [];
  let medPrio = [];
  let highPrio = [];
  return { masterList, lowPrio, medPrio, highPrio, isSorted };
})();

export { ToDoList };
