const ToDo = (title, description, dueDate, priority) => {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.id = Math.floor(Math.random() * 1000);
};
