let secondsOfTimer = 59;

function decreaseTimer() {
    secondsOfTimer--;

    let hours = Math.floor(secondsOfTimer / 3600);
    let minutes = Math.floor(secondsOfTimer / 60) % 60;
    let seconds = secondsOfTimer % 60;

    hours = toString(hours).padStart(2, "0");
    minutes = toString(minutes).padStart(2, "0");
    seconds = toString(seconds).padStart(2, "0");

    if(secondsOfTimer === 0) {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе!");
    }
}

let idInterval = setInterval(decreaseTimer, 1000);



