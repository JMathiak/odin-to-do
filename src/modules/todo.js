const ToDo = function (taskName, description, dueDate, priority) {
  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = false;
  this.projects = ["default"];
  this.id = Math.floor(Math.random() * 1000);
};

export { ToDo };
//How to handle projects?
//Have an overacrching array that holds objects and subarrays for each project? <-- Seems likely
