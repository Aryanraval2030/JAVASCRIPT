let input = document.querySelector(".input")
let btn = document.querySelector("#btn")
let forShow = document.querySelector(".forshow")

btn.addEventListener("click", () => {
    let addTask = input.value
    if (addTask === "") {
        alert("plz enter")
        return;
    }
    forShow.innerHTML += `
        <div class="outer">
            <span>${addTask}</span>
            <button id="remove" onclick="this.parentElement.remove()">remove</button>
            <button id="edit" onclick="editTask(this)">edit</button>
        </div>
    `
    input.value = ""
})

function removeTask(button) {
    button.parentElement.remove()
}
function editTask(button) {
    let taskText = button.parentElement.querySelector("span").innerText
    input.value = taskText
    button.parentElement.remove()
}
