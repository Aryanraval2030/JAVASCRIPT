let hour = document.querySelector("#hour")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")

function dipyTime() {
    let date = new Date()

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hRotatain = 30 * hh + mm / 2
    let mRotatain = 6 * mm
    let sRotatain = 6 * ss


    hour.style.transform = `rotate(${hRotatain}deg)`
    min.style.transform = `rotate(${mRotatain}deg)`
    sec.style.transform = `rotate(${sRotatain}deg)`


}

setInterval(dipyTime, 1000)