var btnStart = document.getElementById("genButton"),
    printArea = document.getElementById("printarea");

var numbers = [];


btnStart.addEventListener("click", function () {
    printArea.innerHTML = "";
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            printArea.innerHTML += "FIZZBUZZ<br>";
        }
        else {
            if (i % 3 == 0) {
                printArea.innerHTML += "FIZZ<br>";
            }
            else {
                if (i % 5 == 0) {
                    printArea.innerHTML += "BUZZ<br>";
                }
                else {
                    printArea.innerHTML += i + "<br>";
                }
            }
        }
    }
});
