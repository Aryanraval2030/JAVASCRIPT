let students = JSON.parse(localStorage.getItem("students")) || [];

let editId = null;

const form = document.querySelector("studentForm");

const tableBody = document.querySelector("#studentTable");

form.addEventListener("submit", (e) => {

    let name = document.querySelector("#name").value;
    let marks = document.querySelector("#marks").value;

    e.preventDefault();

    if (editId === null) {
        students.push({
            id: Date.now(),
            name,
            marks
        })
        showNotification("Student added successfully", "success")
    } else {
        students[editId].name = name;
        students[editId].marks = marks;
        editId = null;
        showNotification("Student edit successfully", "update")
    }

    localStorage.setItem("students", JSON.stringify(students))

    form.reset()

    renderTable();
})



function renderTable() {
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        tableBody.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td>
          <button class="action-btn" onclick="editStudent(${index})">Edit</button>
          <button class="action-btn" onclick="deleteStudent(${student.id})">Delete</button>
        </td>
      </tr>
    `
    })
}



function deleteStudent(id) {
    let confirms = window.confirm("Are you sure you want detete this student data?")
    if (confirms) {
        students = students.filter((student) => student.id !== id)
        localStorage.setItem("students", JSON.stringify(students))
    }
    renderTable()
    console.log("deleteStudent");
    showNotification("Student delete successfully", "delete")
}



function editStudent(index) {
    document.querySelector("name").value = students[index].name;
    document.querySelector("marks").value = students[index].marks;
    editId = index;
    renderTable()
    console.log("editStudent");
}


function showNotification(message, type) {
    const showNotify = document.querySelector("#notification")

    showNotify.textContent = message;
    showNotify.className = `notification ${type}`
    showNotify.style.display = "block"

    setTimeout(() => {
        showNotify.style.display = "none"
    }, 2000)
}

renderTable()