 const inpt=document.getElementById("task");
 const btn_add=document.getElementById("add_btn");
 const dive=document.getElementById("dive");

// 0000000000000000000000000000000000000000000000000000000000000000
 var task="";
 inpt.addEventListener("input",(e)=>{
   task=e.target.value;
})
 
   btn_add.addEventListener("click",(e)=>{
    const diveflex=document.createElement("div");
    const para=document.createElement("div");


      inpt.setCustomValidity("vous n'avez pas entrer de programme");
      e.preventDefault();

      const delet=document.createElement("button");
      const li=document.createElement("p");
      const chek=document.createElement("input");

      delet.innerHTML="x";
      chek.type="checkbox";
     chek.addEventListener("click",()=>{
      li.style.textDecoration="line-through 2px solid black";
     })
      diveflex.appendChild(chek);
      chek.style.boxShadow="0px 0px 5px 1px black";
      diveflex.appendChild(para);
      para.appendChild(li);
      
     
      li.style.listStyle="none";
      li.innerHTML=task;
      diveflex.appendChild(delet);

      dive.appendChild(diveflex);
      diveflex.style.display="flex";
      
     
      diveflex.style.justifyContent="space-around";
      diveflex.style.padding="10px";
      dive.style.display="grid";
      delet.addEventListener("click",(e)=>{
        diveflex.remove();
      })
      if (inpt.value=="") {
        li.remove();
        chek.remove();
        delet.remove();
        diveflex.remove();
        const message=document.getElementById("message");
        message.innerHTML="you need to add tasks to do!!!!";
      }
     })
const resetall=document.getElementById("clear_btn");
resetall.addEventListener("click",(e)=>{
   window.location.reload();
   
})