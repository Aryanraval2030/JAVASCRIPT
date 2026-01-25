let timerOne;
let timeLeft = 0;

const inputBtn = document.getElementById("input-btn");
const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#btn1");
const stopBtn = document.querySelector("#btn2");
const err = document.querySelector(".err");

startBtn.addEventListener("click", () => {
    err.textContent = "";

    let userNum = Number(inputBtn.value);

    if (!userNum || userNum < 0) {
        err.textContent = "plz enter valid time!!";
        return;
    }

    timeLeft = userNum;
    showTime(timeLeft);
    clearInterval(timerOne);

    timerOne = setInterval(() => {
        timeLeft--;
        showTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerOne);
            timer.textContent = "00:00";
            err.textContent = "time's up";
        }

    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerOne);
});

function showTime(sec) {
    let second = sec < 10 ? "0" + sec : sec;
    timer.textContent = "00:" + second;
}
