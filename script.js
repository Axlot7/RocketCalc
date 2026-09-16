let bezi = false
let interval = null

document.getElementById("confirmButton").addEventListener("click", function() {
    if (bezi) return
    bezi = true;

    let time = parseFloat(document.getElementById("massInput").value);
    if (isNaN(time)) {
        bezi = false
        return
    }

    document.getElementById("place").textContent = time;

    interval = setInterval(function() {
        document.getElementById("place").textContent = time - 1;
        time -= 1;

        if (time <= 0) {
            bezi = false
            clearInterval(interval);
        }
    }, 1000);
});

document.getElementById("resetButton").addEventListener("click", function() {
    clearInterval(interval);
    bezi = false;
    document.getElementById("place").textContent = 0;
});