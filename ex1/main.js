let display = document.querySelector("#display");
let cursor = document.querySelector(".cursor");
const intervalID = setInterval(() => {
  typewriter("prout");
}, 1000);

let index = 0;
const typewriter = (text) => {
  display.insertBefore(document.createTextNode(text[index]), cursor); 
  if (index === text.length - 1){
    display.removeChild(cursor);
    clearInterval(intervalID);
    return;
  }
  index++;
}


