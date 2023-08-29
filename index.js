
const inpt=document.getElementById('task');
const liste=document.getElementById('liste');

function addtask(){
  if(inpt.value === ""){
    alert('you must add a task');
  }
 else{
  let li = document.createElement('li');
  li.innerHTML = inpt.value;
  liste.appendChild(li);
  let span=document.createElement('span');
  span.innerHTML="\u00d7";
  li.appendChild(span);  
 }
 inpt.value=""; 
 setdata();
}

liste.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    setdata();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    setdata();
  }
},false);

function setdata(){
  localStorage.setItem('donnees',liste.innerHTML);
}
function getdata(){
    liste.innerHTML=localStorage.getItem('donnees');
}
getdata();