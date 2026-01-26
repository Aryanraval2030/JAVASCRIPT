

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")

let usrscr = 0
let compscr = 0




const compChoice = () => {
    let ary = ["rock", "paper", "scissors"]
    const comCh = Math.floor(Math.random() * 3)
    return ary[comCh]
}


const drowGame = () => {
    msg.innerText = "game is draw, play again!"
}


const showResult = (userWin, chId, comp) => {
    if (userWin) {
        usrscr++
        msg.innerText = `you win is ${chId} beats ${comp}`
        msg.style.backgroundColor = "black"
        msg.style.color = "white"
        userScore.innerText = usrscr
    }
    else {
        compscr++
        msg.innerText = `you lose is ${comp} beats your choice ${chId}`
        compScore.innerText = compscr
    }
}
const plyGame = (chId) => {
    console.log("user", chId)
    let comp = compChoice()
    console.log("com", comp)

    if (chId == comp) {
        drowGame()
        return
    }



    let userWin = true

    if (chId == "rock") {
        userWin = comp == "paper" ? false : true
    }
    else if (chId == "paper") {
        userWin = comp == "rock" ? true : false
    }
    else {
        userWin = comp == "paper" ? true : false
    }
    showResult(userWin, chId, comp)
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const chId = choice.getAttribute("id")
        plyGame(chId)
    });
});
