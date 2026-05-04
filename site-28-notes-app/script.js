function addNote() {
    let input = document.getElementById("noteInput");
    let text = input.value;

    if (text === "") return;

    let div = document.createElement("div");
    div.className = "note";
    div.innerHTML = text + ' <button onclick="this.parentElement.remove()">X</button>';

    document.getElementById("noteList").appendChild(div);

    input.value = "";
}