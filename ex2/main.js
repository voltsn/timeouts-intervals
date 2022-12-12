const display = document.querySelector(".display");

let seconds = 0;
const elapsedTime = () => {
  if (seconds > 60) {
    let minutes = Math.floor(seconds / 60);
    display.innerText = minutes;
    display.innerText += minutes == 1 ? " minute has passed" : " minutes have passed";
  }else {
    display.innerText = seconds;
    display.innerText += seconds == 1 ? " second" : " seconds";
  }
  
  seconds += 1;
  setTimeout(elapsedTime, 1000);
}

elapsedTime();
