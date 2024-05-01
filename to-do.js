function addTask(){
    let anoop=document.getElementById("taskInput");
    let Value=anoop.value;

    let unorder=document.getElementById("taskList");
    const div=document.createElement('div');
    const option1=document.createElement('li');
    option1.textContent=Value;

    const option2=document.createElement('button');
    option2.textContent="delete";
    option2.addEventListener("click",()=>{
        div.remove();
    })
    const option3=document.createElement('button');
    option3.textContent="Done";
    option3.addEventListener("click",()=>{
        div.classList.add("green");
    })
    div.appendChild(option1);
    div.appendChild(option2);
    div.appendChild(option3);
    unorder.appendChild(div)

    anoop.value='';
}