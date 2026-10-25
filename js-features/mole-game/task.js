let win = 0;
let loss = 0;
let killMole = 0;
let failMole = 0;

getHole = index => document.getElementById(`hole${index}`);

for(let i = 1; i < 10; i++ ) {
   let hole = getHole(i);
   hole.onclick = function() {
        if(hole.className.includes("hole_has-mole")) {
        win++;
        killMole = Number(document.getElementById("dead").textContent) + 1;
        document.getElementById("dead").textContent = killMole;
        } else {
            loss++;
            failMole = Number(document.getElementById("lost").textContent) + 1;
            document.getElementById("lost").textContent = failMole;
        }

        if(win === 10) {
            win = 0;
            loss = 0;
            document.getElementById("dead").textContent = 0;
            document.getElementById("lost").textContent = 0;
            alert("Победа");
        }

        if(loss === 5) {
            win = 0;
            loss = 0;
            document.getElementById("dead").textContent = 0
            document.getElementById("lost").textContent = 0;
            alert("Вы проиграли");
        }        
   }
}