function calculate(temp){
return eval(temp)

}
let newbtn = document.createElement("button");
newbtn.innerText = "click me!";

newbtn.style.background = "red";

let body = document.getElementsByTagNameNS("body");
body.prepend(newbtn);
