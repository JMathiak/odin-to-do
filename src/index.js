import { ToDo } from "./modules/todo";
import { ToDoList } from "./modules/list";
import { renderToDos } from "./modules/content";
import initButtons from "./modules/buttons";

console.log(ToDoList.masterList);
let td2 = new ToDo(
  "Roll for Yelan",
  "Pull Yelan bc mommy",
  "5/10/22",
  "Medium"
);
ToDoList.masterList.push(td2);
let td1 = new ToDo(
  "Roll for Ayaka",
  "Use all means necessary to pull Ayaka",
  "4/19/22",
  "High"
);
ToDoList.masterList.push(td1);
let td3 = new ToDo("Roll for Ayato", " pull Ayato", "4/19/22", "Low");
ToDoList.masterList.push(td3);
ToDoList.lowPrio.push(td3);
ToDoList.medPrio.push(td2);
ToDoList.highPrio.push(td1);
renderToDos(ToDoList.masterList);
initButtons();
/*
Notes:
-On add task form need a place to select which project to add the to do to. Allow for multiple project selection (Maybe not)
-Need an edit task button on each task row
-Need to figure out where to create new projects
-View all tasks needs to display project names

Plan of attack:
*Add a few dummy to do objects and get them rendering to the dom
*Set up the add task button 
-Set up task editing <-- Modal with the tasks data pre-filled into a form. 
--Fetch task by using row ID which === task ID <-- Use filter
--Need a discard change button 
--Need a save change button 
*Set up sorting 
--Maybe add which way to be sorted? Strech goal?
*Set up reverting sorting <-- Re render from master by checking isSorting for false
-Set up projects
-- Add project button
-- Add project selection on add task form
-- Add project views
-- Re render table with a filtered array for the project they want to view. 

*/
