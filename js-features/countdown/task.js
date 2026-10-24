let secondsOfTimer = 59;
let timer = document.getElementById("timer");

function decreaseTimer() {
    secondsOfTimer--;

    let hours = Math.floor(secondsOfTimer / 3600);
    let minutes = Math.floor(secondsOfTimer / 60) % 60;
    let seconds = secondsOfTimer % 60;

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    timer.textContent = `${hours}:${minutes}:${seconds}`;

    if(secondsOfTimer === 0) {
        clearInterval(idInterval);
        let link = document.getElementById("download-link");
        link.click();
        alert("Вы победили в конкурсе!");
    }


   // window.location.href = "https://example.com"

}

let idInterval = setInterval(decreaseTimer, 1000);



