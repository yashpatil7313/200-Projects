function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = taskText + ' <button onclick="this.parentElement.remove()">X</button>';

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}