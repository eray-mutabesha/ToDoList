 const inpt=document.getElementById("task");
 const btn_add=document.getElementById("add_btn");
 const dive=document.getElementById("dive");
var task="";
inpt.addEventListener("input",(e)=>{
   task=e.target.value;
})
 
   btn_add.addEventListener("click",(e)=>{
      inpt.setCustomValidity("vous n'avez pas entrer de programme");
      e.preventDefault();
      const delet=document.createElement("button");
      const li=document.createElement("li");
      const chek=document.createElement("input");
      const nav=document.createElement("nav");
      delet.innerHTML="x";
      nav.appendChild(delet);
      nav.appendChild(li);
      nav.appendChild(chek);
      nav.style.display="flex";
      chek.type="checkbox";
      
      li.style.margin="5px";
      li.style.width="100%";
      li.style.listStyle="none";
      dive.appendChild(nav);
      chek.style.margin="5px";
      dive.style.display="grid"; 
      li.innerHTML=task;
      delet.addEventListener("click",(e)=>{
        nav.remove();
      })

      if (inpt.value=="") {
        li.remove();
        chek.remove();
        delet.remove();
        const message=getElementById("message");
        message.innerHTML="you need to add tasks to do";
      }
     })
 
   
const resetall=document.getElementById("clear_btn");
resetall.addEventListener("click",(e)=>{
   window.location.reload();
   
})