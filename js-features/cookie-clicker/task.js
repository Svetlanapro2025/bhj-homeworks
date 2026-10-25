
let imageClick = document.getElementById("cookie");
let clickSeconds = document.getElementById("clicker-speed");
let start = null;
imageClick.onclick = function () {
    let linkCounter = document.getElementById("clicker__counter");
    let clickerCounter = Number(linkCounter.textContent);
    clickerCounter += 1;
    linkCounter.textContent = clickerCounter;

    if(clickerCounter % 2 === 0) {
        imageClick.width = 200;
        imageClick.height = 128;
    } else {
        imageClick.width = 180;
        imageClick.height = 115;
    }

    if(start !== null) {
        let end = Date.now();
        let difference = end - start;
        if(difference > 0){
            let differenceSecond = difference / 1000;
            let countClickOfSecond = (1 / differenceSecond).toFixed(2);
            clickSeconds.textContent = countClickOfSecond;
        }       
        start = end;
    } else {
        start = Date.now();
    }
}







