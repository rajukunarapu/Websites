const inputBox = document.getElementById("input-Box")
const listContainer = document.querySelector(".list-container")

function addTask() {
    if (inputBox.value == '') {
        alert("Input box can not be empty")
    }
    else {
        const li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""               // Empty the input value after entering the task
    saveData()

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()

    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()

    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showcase() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showcase()