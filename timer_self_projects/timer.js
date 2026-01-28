let timerCount = document.getElementsByClassName("timer")[0];
let start = document.getElementsByClassName("btn1")[0];
let stop = document.querySelector(".btn2");
let error = document.querySelector(".err");
let inputUser = document.querySelector("#inputuser");

let timer = null;     // interval id
let leftTime = 0;     // remaining seconds

// format seconds → HH:MM:SS
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    return (
        String(hrs).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0")
    );
}

// START BUTTON
start.addEventListener("click", () => {
    let inputUserNumber = Number(inputUser.value);

    if (!inputUserNumber || inputUserNumber <= 0) {
        error.textContent = "Please enter a valid number!";
        return;
    }

    error.textContent = "";

    // prevent multiple intervals
    if (timer !== null) return;

    leftTime = inputUserNumber;
    timerCount.textContent = formatTime(leftTime);

    timer = setInterval(() => {
        leftTime--;

        timerCount.textContent = formatTime(leftTime);

        if (leftTime <= 0) {
            clearInterval(timer);
            timer = null;
            timerCount.textContent = "00:00:00";
            error.textContent = "Time's up!";
        }
    }, 1000);
});

// STOP BUTTON
stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});
