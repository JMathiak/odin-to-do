import { ToDo } from "./modules/todo";
import { setPrioArrays, ToDoList } from "./modules/list";
import { renderProjectsForTaskMenus, renderToDos } from "./modules/content";
import initButtons from "./modules/buttons";

console.log(ToDoList.masterList);
let td2 = new ToDo(
  "Roll for Yelan",
  "Pull Yelan bc mommy",
  "5/10/22",
  "Medium",
  "Pulls"
);
ToDoList.masterList.push(td2);
let td1 = new ToDo(
  "Roll for Ayaka",
  "Use all means necessary to pull Ayaka",
  "4/19/22",
  "High",
  "Ascension"
);
ToDoList.masterList.push(td1);
let td3 = new ToDo("Roll for Ayato", " pull Ayato", "4/19/22", "Low", "Pulls");
ToDoList.masterList.push(td3);
setPrioArrays();
renderToDos(ToDoList.masterList);
initButtons();
renderProjectsForTaskMenus();

/*
Notes:
-On add task form need a place to select which project to add the to do to. Allow for multiple project selection (Maybe not)
-Need an edit task button on each task row
-Need to figure out where to create new projects
-View all tasks needs to display project names

Plan of attack:
*Add a few dummy to do objects and get them rendering to the dom
*Set up the add task button 
*Set up task editing <-- Modal with the tasks data pre-filled into a form. 
--Need a discard change button 
**Need a save change button 
*Set up sorting 
--Maybe add which way to be sorted? Strech goal?
*Set up reverting sorting <-- Re render from master by checking isSorting for false
-Set up projects
** Add project button
** Add project selection on add task form
-- Edit Projects Modal. (?)
-- Add project views <-- Can definitely do
-- Re render table with a filtered array for the project they want to view. 


Sorting Modal:
**Dropdown with default, low to high priority, high to low, project (which just groups the tasks by projects)
*** To do the last one, iterate through projects array filtering the main array and rendering the resulting array 

**change sorting modal to a dropdown w/out modal + onchange rather than a submit

--Projects collapsible on sidebar or a drop down? or a modal? or??? Something to view only tasks of a project. 
**Button/Radio for marking a task complete that crosses out the row
**Change buttons to icons of some sort. Pencil for edit, trashcan for delete

*CSS for Modals



*Change table rendering to all occur in JS
-Projects button in side bar renders table with project name + buttons for edit + delete

*/
