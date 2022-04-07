(()=>{"use strict";const e={masterList:[]},t=()=>{for(let t=0;t<e.masterList.length;t++)n(t)},n=t=>{let n=document.querySelector(".content"),s=e.masterList[t].id,a=document.createElement("div");a.innerHTML=e.masterList[t].taskName,a.id="task-"+s,a.className="task-content",n.appendChild(a);let l=document.createElement("div");l.innerHTML=e.masterList[t].description,l.id="task-"+s,l.className="task-content",n.appendChild(l);let i=document.createElement("div");i.innerHTML=e.masterList[t].dueDate,i.id="task-"+s,i.className="task-content",n.appendChild(i);let o=document.createElement("div");o.innerHTML=e.masterList[t].priority,o.id="task-"+s,o.className="task-content",n.appendChild(o)},s=function(e,t,n,s){this.taskName=e,this.description=t,this.dueDate=n,this.priority=s,this.complete=!1,this.projects=["default"],this.id=Math.floor(1e3*Math.random())},a=()=>{let n=document.getElementById("taskNameInput").value,a=document.getElementById("descriptionInput").value,l=document.getElementById("dateInput").value,i=document.getElementById("priorityInput").value,o=new s(n,a,l,i);e.masterList.push(o),(()=>{let e=document.querySelectorAll(".task-content");console.log(e),e.forEach((e=>{e.remove()}))})(),t()};let l=new s("Roll for Ayaka","Use all means necessary to pull Ayaka","4/19/22","High");e.masterList.push(l),console.log(e.masterList);let i=new s("Roll for Yelan","Pull Yelan bc mommy","5/10/22","High");e.masterList.push(i),t(),(()=>{let e=document.getElementById("taskModal");document.getElementById("newTaskBtn").onclick=function(){e.style.display="block"},window.onclick=function(t){t.target==e&&(e.style.display="none")},document.getElementById("submit-task-btn").addEventListener("click",a)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFHRyxDQUFFQyxXQUZRLElDQWJDLEVBQWMsS0FDbEIsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlILEVBQVNDLFdBQVdHLE9BQVFELElBQzlDRSxFQUFVRixJQUlSRSxFQUFhRixJQUNqQixJQUFJRyxFQUFhQyxTQUFTQyxjQUFjLFlBR3BDQyxFQUFLVCxFQUFTQyxXQUFXRSxHQUFHTyxHQUU1QkMsRUFBUUosU0FBU0ssY0FBYyxPQUNuQ0QsRUFBTUUsVUFBWWIsRUFBU0MsV0FBV0UsR0FBR1csU0FDekNILEVBQU1ELEdBQUssUUFBVUQsRUFDckJFLEVBQU1JLFVBQVksZUFDbEJULEVBQVdVLFlBQVlMLEdBRXZCLElBQUlNLEVBQWNWLFNBQVNLLGNBQWMsT0FDekNLLEVBQVlKLFVBQVliLEVBQVNDLFdBQVdFLEdBQUdjLFlBQy9DQSxFQUFZUCxHQUFLLFFBQVVELEVBQzNCUSxFQUFZRixVQUFZLGVBQ3hCVCxFQUFXVSxZQUFZQyxHQUV2QixJQUFJQyxFQUFVWCxTQUFTSyxjQUFjLE9BQ3JDTSxFQUFRTCxVQUFZYixFQUFTQyxXQUFXRSxHQUFHZSxRQUMzQ0EsRUFBUVIsR0FBSyxRQUFVRCxFQUN2QlMsRUFBUUgsVUFBWSxlQUNwQlQsRUFBV1UsWUFBWUUsR0FFdkIsSUFBSUMsRUFBT1osU0FBU0ssY0FBYyxPQUNsQ08sRUFBS04sVUFBWWIsRUFBU0MsV0FBV0UsR0FBR2lCLFNBQ3hDRCxFQUFLVCxHQUFLLFFBQVVELEVBQ3BCVSxFQUFLSixVQUFZLGVBQ2pCVCxFQUFXVSxZQUFZRyxJQ2hDbkJFLEVBQU8sU0FBVVAsRUFBVUcsRUFBYUMsRUFBU0UsR0FDckRFLEtBQUtSLFNBQVdBLEVBQ2hCUSxLQUFLTCxZQUFjQSxFQUNuQkssS0FBS0osUUFBVUEsRUFDZkksS0FBS0YsU0FBV0EsRUFDaEJFLEtBQUtDLFVBQVcsRUFDaEJELEtBQUtFLFNBQVcsQ0FBQyxXQUNqQkYsS0FBS1osR0FBS2UsS0FBS0MsTUFBc0IsSUFBaEJELEtBQUtFLFdBR3RCQyxFQUFVLEtBQ2QsSUFBSWQsRUFBV1AsU0FBU3NCLGVBQWUsaUJBQWlCQyxNQUNwREMsRUFBV3hCLFNBQVNzQixlQUFlLG9CQUFvQkMsTUFDdkRFLEVBQVd6QixTQUFTc0IsZUFBZSxhQUFhQyxNQUNoREcsRUFBVzFCLFNBQVNzQixlQUFlLGlCQUFpQkMsTUFFcERJLEVBQVUsSUFBSWIsRUFBS1AsRUFBVWlCLEVBQVVDLEVBQVVDLEdBQ3JEakMsRUFBU0MsV0FBV2tDLEtBQUtELEdEa0JSLE1BQ2pCLElBQUk1QixFQUFhQyxTQUFTNkIsaUJBQWlCLGlCQUMzQ0MsUUFBUUMsSUFBSWhDLEdBQ1pBLEVBQVdpQyxTQUFTQyxJQUNsQkEsRUFBWUMsYUFLZEMsR0FDQXhDLEtFNUNGLElBQUl5QyxFQUFNLElBQUl0QixFQUNaLGlCQUNBLHdDQUNBLFVBQ0EsUUFFRnJCLEVBQVNDLFdBQVdrQyxLQUFLUSxHQUN6Qk4sUUFBUUMsSUFBSXRDLEVBQVNDLFlBQ3JCLElBQUkyQyxFQUFNLElBQUl2QixFQUFLLGlCQUFrQixzQkFBdUIsVUFBVyxRQUN2RXJCLEVBQVNDLFdBQVdrQyxLQUFLUyxHQUN6QjFDLElDWm9CLE1BQ2xCLElBQUkyQyxFQUFRdEMsU0FBU3NCLGVBQWUsYUFDbkJ0QixTQUFTc0IsZUFBZSxjQUU5QmlCLFFBQVUsV0FDbkJELEVBQU1FLE1BQU1DLFFBQVUsU0FHeEJDLE9BQU9ILFFBQVUsU0FBVUksR0FDckJBLEVBQU1DLFFBQVVOLElBQ2xCQSxFQUFNRSxNQUFNQyxRQUFVLFNBSVB6QyxTQUFTc0IsZUFBZSxtQkFDOUJ1QixpQkFBaUIsUUFBU3hCLElERnpDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL21vZHVsZXMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvbW9kdWxlcy9idXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvRG9MaXN0ID0gKCgpID0+IHtcclxuICBsZXQgbWFzdGVyTGlzdCA9IFtdO1xyXG5cclxuICByZXR1cm4geyBtYXN0ZXJMaXN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBUb0RvTGlzdCB9O1xyXG4iLCJpbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcclxuY29uc3QgcmVuZGVyVG9Eb3MgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUb0RvTGlzdC5tYXN0ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICByZW5kZXJSb3coaSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyUm93ID0gKGkpID0+IHtcclxuICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuXHJcbiAgLy9EYXRhIGtleT8gPC0tIE5lZWQgdG8gYWRkIHRoZSBkYXRhIGtleSB0byBlYWNoIGRpdi5cclxuICBsZXQgZGsgPSBUb0RvTGlzdC5tYXN0ZXJMaXN0W2ldLmlkO1xyXG5cclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRpdGxlLmlubmVySFRNTCA9IFRvRG9MaXN0Lm1hc3Rlckxpc3RbaV0udGFza05hbWU7XHJcbiAgdGl0bGUuaWQgPSBcInRhc2stXCIgKyBkaztcclxuICB0aXRsZS5jbGFzc05hbWUgPSBcInRhc2stY29udGVudFwiO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFRvRG9MaXN0Lm1hc3Rlckxpc3RbaV0uZGVzY3JpcHRpb247XHJcbiAgZGVzY3JpcHRpb24uaWQgPSBcInRhc2stXCIgKyBkaztcclxuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcInRhc2stY29udGVudFwiO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBUb0RvTGlzdC5tYXN0ZXJMaXN0W2ldLmR1ZURhdGU7XHJcbiAgZHVlRGF0ZS5pZCA9IFwidGFzay1cIiArIGRrO1xyXG4gIGR1ZURhdGUuY2xhc3NOYW1lID0gXCJ0YXNrLWNvbnRlbnRcIjtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuICBsZXQgcHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcHJpby5pbm5lckhUTUwgPSBUb0RvTGlzdC5tYXN0ZXJMaXN0W2ldLnByaW9yaXR5O1xyXG4gIHByaW8uaWQgPSBcInRhc2stXCIgKyBkaztcclxuICBwcmlvLmNsYXNzTmFtZSA9IFwidGFzay1jb250ZW50XCI7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcmlvKTtcclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVJvd3MgPSAoKSA9PiB7XHJcbiAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY29udGVudFwiKTtcclxuICBjb25zb2xlLmxvZyhjb250ZW50RGl2KTtcclxuICBjb250ZW50RGl2LmZvckVhY2goKHRhc2tFbGVtZW50KSA9PiB7XHJcbiAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlZnJlc2hDb250ZW50ID0gKCkgPT4ge1xyXG4gIHJlbW92ZVJvd3MoKTtcclxuICByZW5kZXJUb0RvcygpO1xyXG59O1xyXG5leHBvcnQgeyByZW5kZXJUb0RvcywgcmVmcmVzaENvbnRlbnQgfTtcclxuXHJcbi8vVXNlIHF1ZXJ5IHNlbGVjdG9yIHRvIGdldCBhcnJheSBvZiBkaXZzIHRoYXQgaGFzIHRoZSBkYXRhIGF0dHJpYnV0ZSBJIHdhbnQgdG8gcmVtb3ZlXHJcbiIsImltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xyXG5pbXBvcnQgeyByZWZyZXNoQ29udGVudCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcclxuXHJcbmNvbnN0IFRvRG8gPSBmdW5jdGlvbiAodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcclxuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gIHRoaXMucHJvamVjdHMgPSBbXCJkZWZhdWx0XCJdO1xyXG4gIHRoaXMuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XHJcbiAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTmFtZUlucHV0XCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbnB1dFwiKS52YWx1ZTtcclxuICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZTtcclxuICBsZXQgdGFza1ByaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5SW5wdXRcIikudmFsdWU7XHJcblxyXG4gIGxldCBuZXdUYXNrID0gbmV3IFRvRG8odGFza05hbWUsIHRhc2tEZXNjLCB0YXNrRGF0ZSwgdGFza1ByaW8pO1xyXG4gIFRvRG9MaXN0Lm1hc3Rlckxpc3QucHVzaChuZXdUYXNrKTtcclxuXHJcbiAgcmVmcmVzaENvbnRlbnQoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFRvRG8sIGFkZFRvRG8gfTtcclxuLy9Ib3cgdG8gaGFuZGxlIHByb2plY3RzP1xyXG4vL0hhdmUgYW4gb3ZlcmFjcmNoaW5nIGFycmF5IHRoYXQgaG9sZHMgb2JqZWN0cyBhbmQgc3ViYXJyYXlzIGZvciBlYWNoIHByb2plY3Q/IDwtLSBTZWVtcyBsaWtlbHlcclxuIiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xyXG5pbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL21vZHVsZXMvbGlzdFwiO1xyXG5pbXBvcnQgeyByZW5kZXJUb0RvcyB9IGZyb20gXCIuL21vZHVsZXMvY29udGVudFwiO1xyXG5pbXBvcnQgaW5pdEJ1dHRvbnMgZnJvbSBcIi4vbW9kdWxlcy9idXR0b25zXCI7XHJcbmxldCB0ZDEgPSBuZXcgVG9EbyhcclxuICBcIlJvbGwgZm9yIEF5YWthXCIsXHJcbiAgXCJVc2UgYWxsIG1lYW5zIG5lY2Vzc2FyeSB0byBwdWxsIEF5YWthXCIsXHJcbiAgXCI0LzE5LzIyXCIsXHJcbiAgXCJIaWdoXCJcclxuKTtcclxuVG9Eb0xpc3QubWFzdGVyTGlzdC5wdXNoKHRkMSk7XHJcbmNvbnNvbGUubG9nKFRvRG9MaXN0Lm1hc3Rlckxpc3QpO1xyXG5sZXQgdGQyID0gbmV3IFRvRG8oXCJSb2xsIGZvciBZZWxhblwiLCBcIlB1bGwgWWVsYW4gYmMgbW9tbXlcIiwgXCI1LzEwLzIyXCIsIFwiSGlnaFwiKTtcclxuVG9Eb0xpc3QubWFzdGVyTGlzdC5wdXNoKHRkMik7XHJcbnJlbmRlclRvRG9zKCk7XHJcbmluaXRCdXR0b25zKCk7XHJcbi8qXHJcbk5vdGVzOlxyXG4tT24gYWRkIHRhc2sgZm9ybSBuZWVkIGEgcGxhY2UgdG8gc2VsZWN0IHdoaWNoIHByb2plY3QgdG8gYWRkIHRoZSB0byBkbyB0by4gQWxsb3cgZm9yIG11bHRpcGxlIHByb2plY3Qgc2VsZWN0aW9uXHJcbi1OZWVkIGFuIGVkaXQgdGFzayBidXR0b24gb24gZWFjaCB0YXNrIHJvd1xyXG4tTmVlZCB0byBmaWd1cmUgb3V0IHdoZXJlIHRvIGNyZWF0ZSBuZXcgcHJvamVjdHNcclxuLVZpZXcgYWxsIHRhc2tzIG5lZWRzIHRvIGRpc3BsYXkgcHJvamVjdCBuYW1lc1xyXG5cclxuUGxhbiBvZiBhdHRhY2s6XHJcbi1BZGQgYSBmZXcgZHVtbXkgdG8gZG8gb2JqZWN0cyBhbmQgZ2V0IHRoZW0gcmVuZGVyaW5nIHRvIHRoZSBkb21cclxuLVNldCB1cCB0aGUgYWRkIHRhc2sgYnV0dG9uIFxyXG4tU2V0IHVwIHByb2plY3RzXHJcbi0tIEFkZCBwcm9qZWN0IGJ1dHRvblxyXG4tLSBBZGQgcHJvamVjdCBzZWxlY3Rpb24gb24gYWRkIHRhc2sgZm9ybVxyXG4tLSBBZGQgcHJvamVjdCB2aWV3c1xyXG4tIFNldCB1cCB0YXNrIGVkaXRpbmdcclxuLSBTZXQgdXAgc29ydGluZyBcclxuXHJcbiovXHJcbiIsImltcG9ydCB7IGFkZFRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5jb25zdCBpbml0QnV0dG9ucyA9ICgpID0+IHtcclxuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tNb2RhbFwiKTtcclxuICBsZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0J0blwiKTtcclxuXHJcbiAgdGFza0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9O1xyXG5cclxuICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHN1Ym1pdGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXRhc2stYnRuXCIpO1xyXG4gIHN1Ym1pdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9Ebyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QnV0dG9ucztcclxuIl0sIm5hbWVzIjpbIlRvRG9MaXN0IiwibWFzdGVyTGlzdCIsInJlbmRlclRvRG9zIiwiaSIsImxlbmd0aCIsInJlbmRlclJvdyIsImNvbnRlbnREaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkayIsImlkIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGFza05hbWUiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW8iLCJwcmlvcml0eSIsIlRvRG8iLCJ0aGlzIiwiY29tcGxldGUiLCJwcm9qZWN0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFkZFRvRG8iLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwidGFza0Rlc2MiLCJ0YXNrRGF0ZSIsInRhc2tQcmlvIiwibmV3VGFzayIsInB1c2giLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJ0YXNrRWxlbWVudCIsInJlbW92ZSIsInJlbW92ZVJvd3MiLCJ0ZDEiLCJ0ZDIiLCJtb2RhbCIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJldmVudCIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9