(()=>{"use strict";const e={masterList:[]},t=()=>{for(let t=0;t<e.masterList.length;t++)n(t);const t=document.getElementsByClassName("del-btn");console.log(t);for(let e=0;e<t.length;e++)console.log("here"),t[e].addEventListener("click",l)},n=t=>{let n=document.querySelector("#task-table-body"),l=e.masterList[t].id,d=document.createElement("tr");d.setAttribute("data-key",l);let a=document.createElement("td");a.innerHTML=e.masterList[t].taskName,d.appendChild(a);let s=document.createElement("td");s.innerHTML=e.masterList[t].description,d.appendChild(s);let o=document.createElement("td");o.innerHTML=e.masterList[t].dueDate,d.appendChild(o);let i=document.createElement("td");i.innerHTML=e.masterList[t].priority,d.appendChild(i);let m=document.createElement("td"),r=document.createElement("button");m.appendChild(r),r.setAttribute("type","button"),r.innerHTML="Delete",r.classList.add("del-btn"),d.appendChild(m),n.appendChild(d)},l=t=>{let n=t.target.parentNode.parentNode.getAttribute("data-key");console.log("here",n);let l=e.masterList.filter((e=>e.id!=n));e.masterList=l,d()},d=()=>{(()=>{let e=document.querySelector("#task-table-body");for(;e.firstChild;)e.removeChild(e.firstChild)})(),t()},a=function(e,t,n,l){this.taskName=e,this.description=t,this.dueDate=n,this.priority=l,this.complete=!1,this.projects=["default"],this.id=Math.floor(1e3*Math.random())};let s=new a("Roll for Ayaka","Use all means necessary to pull Ayaka","4/19/22","High");e.masterList.push(s),console.log(e.masterList);let o=new a("Roll for Yelan","Pull Yelan bc mommy","5/10/22","High");e.masterList.push(o),t(),(()=>{let t=document.getElementById("taskModal");document.getElementById("newTaskBtn").onclick=function(){t.style.display="block"},window.onclick=function(e){e.target==t&&(t.style.display="none")},document.getElementById("submit-task-btn").onclick=function(){(()=>{let t=document.getElementById("taskNameInput").value,n=document.getElementById("descriptionInput").value,l=document.getElementById("dateInput").value,s=document.getElementById("priorityInput").value,o=new a(t,n,l,s);e.masterList.push(o),d()})(),document.getElementById("taskModal").style.display="none",document.getElementById("taskNameInput").value="",document.getElementById("descriptionInput").value="",document.getElementById("dateInput").value="",document.getElementById("priorityInput").selectedIndex=0}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFdGSlQsTUFDZCxJQUFJbEMsRUFBV2hCLFNBQVNpRCxlQUFlLGlCQUFpQk0sTUFDcERDLEVBQVd4RCxTQUFTaUQsZUFBZSxvQkFBb0JNLE1BQ3ZERSxFQUFXekQsU0FBU2lELGVBQWUsYUFBYU0sTUFDaERHLEVBQVcxRCxTQUFTaUQsZUFBZSxpQkFBaUJNLE1BRXBESSxFQUFVLElBQUlyQixFQUFLdEIsRUFBVXdDLEVBQVVDLEVBQVVDLEdBQ3JEakUsRUFBU0MsV0FBV29ELEtBQUthLEdBRXpCMUIsS0VKRTJCLEdBQ1k1RCxTQUFTaUQsZUFBZSxhQUM5QkUsTUFBTUMsUUFBVSxPQUN0QnBELFNBQVNpRCxlQUFlLGlCQUFpQk0sTUFBUSxHQUNqRHZELFNBQVNpRCxlQUFlLG9CQUFvQk0sTUFBUSxHQUNwRHZELFNBQVNpRCxlQUFlLGFBQWFNLE1BQVEsR0FDN0N2RCxTQUFTaUQsZUFBZSxpQkFBaUJZLGNBQWdCLElEVDdELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL21vZHVsZXMvbGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8vLi9zcmMvbW9kdWxlcy9idXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvRG9MaXN0ID0gKCgpID0+IHtcclxuICBsZXQgbWFzdGVyTGlzdCA9IFtdO1xyXG5cclxuICByZXR1cm4geyBtYXN0ZXJMaXN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBUb0RvTGlzdCB9O1xyXG4iLCJpbXBvcnQgeyBUb0RvTGlzdCB9IGZyb20gXCIuL2xpc3RcIjtcclxuY29uc3QgcmVuZGVyVG9Eb3MgPSAoKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUb0RvTGlzdC5tYXN0ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICByZW5kZXJSb3coaSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRlbEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsLWJ0blwiKTtcclxuICBjb25zb2xlLmxvZyhkZWxCdG5zKTtcclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGRlbEJ0bnMubGVuZ3RoOyBqKyspIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgIGRlbEJ0bnNbal0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVRhc2spO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlbmRlclJvdyA9IChpKSA9PiB7XHJcbiAgbGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10YWJsZS1ib2R5XCIpO1xyXG5cclxuICAvL0RhdGEga2V5PyA8LS0gTmVlZCB0byBhZGQgdGhlIGRhdGEga2V5IHRvIGVhY2ggZGl2LlxyXG4gIGxldCBkayA9IFRvRG9MaXN0Lm1hc3Rlckxpc3RbaV0uaWQ7XHJcbiAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICByb3cuc2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIiwgZGspO1xyXG5cclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgdGl0bGUuaW5uZXJIVE1MID0gVG9Eb0xpc3QubWFzdGVyTGlzdFtpXS50YXNrTmFtZTtcclxuICByb3cuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gVG9Eb0xpc3QubWFzdGVyTGlzdFtpXS5kZXNjcmlwdGlvbjtcclxuICByb3cuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICBkdWVEYXRlLmlubmVySFRNTCA9IFRvRG9MaXN0Lm1hc3Rlckxpc3RbaV0uZHVlRGF0ZTtcclxuICByb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gIGxldCBwcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gIHByaW8uaW5uZXJIVE1MID0gVG9Eb0xpc3QubWFzdGVyTGlzdFtpXS5wcmlvcml0eTtcclxuICByb3cuYXBwZW5kQ2hpbGQocHJpbyk7XHJcblxyXG4gIC8vTmVlZCB0byBjcmVhdGUgYnV0dG9uc1xyXG5cclxuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICBsZXQgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBidXR0b25zLmFwcGVuZENoaWxkKGRlbEJ0bik7XHJcbiAgZGVsQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgZGVsQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XHJcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtYnRuXCIpO1xyXG4gIHJvdy5hcHBlbmRDaGlsZChidXR0b25zKTtcclxuXHJcbiAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHJvdyk7XHJcbn07XHJcblxyXG5jb25zdCByZW1vdmVSb3dzID0gKCkgPT4ge1xyXG4gIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRhYmxlLWJvZHlcIik7XHJcbiAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlbW92ZVRhc2sgPSAoZSkgPT4ge1xyXG4gIGxldCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcclxuICBjb25zb2xlLmxvZyhcImhlcmVcIiwgaWQpO1xyXG4gIGxldCBmaWx0ZXJBcnIgPSBUb0RvTGlzdC5tYXN0ZXJMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPSBpZCk7XHJcbiAgVG9Eb0xpc3QubWFzdGVyTGlzdCA9IGZpbHRlckFycjtcclxuICByZWZyZXNoQ29udGVudCgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVmcmVzaENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgcmVtb3ZlUm93cygpO1xyXG4gIHJlbmRlclRvRG9zKCk7XHJcbn07XHJcbmV4cG9ydCB7IHJlbmRlclRvRG9zLCByZWZyZXNoQ29udGVudCB9O1xyXG5cclxuLy9Vc2UgcXVlcnkgc2VsZWN0b3IgdG8gZ2V0IGFycmF5IG9mIGRpdnMgdGhhdCBoYXMgdGhlIGRhdGEgYXR0cmlidXRlIEkgd2FudCB0byByZW1vdmVcclxuIiwiaW1wb3J0IHsgVG9Eb0xpc3QgfSBmcm9tIFwiLi9saXN0XCI7XHJcbmltcG9ydCB7IHJlZnJlc2hDb250ZW50IH0gZnJvbSBcIi4vY29udGVudFwiO1xyXG5cclxuY29uc3QgVG9EbyA9IGZ1bmN0aW9uICh0YXNrTmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lO1xyXG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgdGhpcy5wcm9qZWN0cyA9IFtcImRlZmF1bHRcIl07XHJcbiAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVG9EbyA9ICgpID0+IHtcclxuICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lSW5wdXRcIikudmFsdWU7XHJcbiAgbGV0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbklucHV0XCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUlucHV0XCIpLnZhbHVlO1xyXG4gIGxldCB0YXNrUHJpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcclxuXHJcbiAgbGV0IG5ld1Rhc2sgPSBuZXcgVG9Ebyh0YXNrTmFtZSwgdGFza0Rlc2MsIHRhc2tEYXRlLCB0YXNrUHJpbyk7XHJcbiAgVG9Eb0xpc3QubWFzdGVyTGlzdC5wdXNoKG5ld1Rhc2spO1xyXG5cclxuICByZWZyZXNoQ29udGVudCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgVG9EbywgYWRkVG9EbyB9O1xyXG4vL0hvdyB0byBoYW5kbGUgcHJvamVjdHM/XHJcbi8vSGF2ZSBhbiBvdmVyYWNyY2hpbmcgYXJyYXkgdGhhdCBob2xkcyBvYmplY3RzIGFuZCBzdWJhcnJheXMgZm9yIGVhY2ggcHJvamVjdD8gPC0tIFNlZW1zIGxpa2VseVxyXG4iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vbW9kdWxlcy90b2RvXCI7XHJcbmltcG9ydCB7IFRvRG9MaXN0IH0gZnJvbSBcIi4vbW9kdWxlcy9saXN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vbW9kdWxlcy9jb250ZW50XCI7XHJcbmltcG9ydCBpbml0QnV0dG9ucyBmcm9tIFwiLi9tb2R1bGVzL2J1dHRvbnNcIjtcclxubGV0IHRkMSA9IG5ldyBUb0RvKFxyXG4gIFwiUm9sbCBmb3IgQXlha2FcIixcclxuICBcIlVzZSBhbGwgbWVhbnMgbmVjZXNzYXJ5IHRvIHB1bGwgQXlha2FcIixcclxuICBcIjQvMTkvMjJcIixcclxuICBcIkhpZ2hcIlxyXG4pO1xyXG5Ub0RvTGlzdC5tYXN0ZXJMaXN0LnB1c2godGQxKTtcclxuY29uc29sZS5sb2coVG9Eb0xpc3QubWFzdGVyTGlzdCk7XHJcbmxldCB0ZDIgPSBuZXcgVG9EbyhcIlJvbGwgZm9yIFllbGFuXCIsIFwiUHVsbCBZZWxhbiBiYyBtb21teVwiLCBcIjUvMTAvMjJcIiwgXCJIaWdoXCIpO1xyXG5Ub0RvTGlzdC5tYXN0ZXJMaXN0LnB1c2godGQyKTtcclxucmVuZGVyVG9Eb3MoKTtcclxuaW5pdEJ1dHRvbnMoKTtcclxuLypcclxuTm90ZXM6XHJcbi1PbiBhZGQgdGFzayBmb3JtIG5lZWQgYSBwbGFjZSB0byBzZWxlY3Qgd2hpY2ggcHJvamVjdCB0byBhZGQgdGhlIHRvIGRvIHRvLiBBbGxvdyBmb3IgbXVsdGlwbGUgcHJvamVjdCBzZWxlY3Rpb25cclxuLU5lZWQgYW4gZWRpdCB0YXNrIGJ1dHRvbiBvbiBlYWNoIHRhc2sgcm93XHJcbi1OZWVkIHRvIGZpZ3VyZSBvdXQgd2hlcmUgdG8gY3JlYXRlIG5ldyBwcm9qZWN0c1xyXG4tVmlldyBhbGwgdGFza3MgbmVlZHMgdG8gZGlzcGxheSBwcm9qZWN0IG5hbWVzXHJcblxyXG5QbGFuIG9mIGF0dGFjazpcclxuLUFkZCBhIGZldyBkdW1teSB0byBkbyBvYmplY3RzIGFuZCBnZXQgdGhlbSByZW5kZXJpbmcgdG8gdGhlIGRvbVxyXG4tU2V0IHVwIHRoZSBhZGQgdGFzayBidXR0b24gXHJcbi1TZXQgdXAgcHJvamVjdHNcclxuLS0gQWRkIHByb2plY3QgYnV0dG9uXHJcbi0tIEFkZCBwcm9qZWN0IHNlbGVjdGlvbiBvbiBhZGQgdGFzayBmb3JtXHJcbi0tIEFkZCBwcm9qZWN0IHZpZXdzXHJcbi0gU2V0IHVwIHRhc2sgZWRpdGluZ1xyXG4tIFNldCB1cCBzb3J0aW5nIFxyXG5cclxuKi9cclxuIiwiaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmNvbnN0IGluaXRCdXR0b25zID0gKCkgPT4ge1xyXG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza01vZGFsXCIpO1xyXG4gIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrQnRuXCIpO1xyXG5cclxuICB0YXNrQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH07XHJcblxyXG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgc3VibWl0YnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtdGFzay1idG5cIik7XHJcbiAgc3VibWl0YnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBhZGRUb0RvKCk7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tNb2RhbFwiKTtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza05hbWVJbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUlucHV0XCIpLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QnV0dG9ucztcclxuIl0sIm5hbWVzIjpbIlRvRG9MaXN0IiwibWFzdGVyTGlzdCIsInJlbmRlclRvRG9zIiwiaSIsImxlbmd0aCIsInJlbmRlclJvdyIsImRlbEJ0bnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiaiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVUYXNrIiwidGFibGVCb2R5IiwicXVlcnlTZWxlY3RvciIsImRrIiwiaWQiLCJyb3ciLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGl0bGUiLCJpbm5lckhUTUwiLCJ0YXNrTmFtZSIsImFwcGVuZENoaWxkIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpbyIsInByaW9yaXR5IiwiYnV0dG9ucyIsImRlbEJ0biIsImNsYXNzTGlzdCIsImFkZCIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwiZmlsdGVyQXJyIiwiZmlsdGVyIiwidGFzayIsInJlZnJlc2hDb250ZW50IiwiY29udGVudERpdiIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVJvd3MiLCJUb0RvIiwidGhpcyIsImNvbXBsZXRlIiwicHJvamVjdHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZDEiLCJwdXNoIiwidGQyIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJldmVudCIsInZhbHVlIiwidGFza0Rlc2MiLCJ0YXNrRGF0ZSIsInRhc2tQcmlvIiwibmV3VGFzayIsImFkZFRvRG8iLCJzZWxlY3RlZEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==