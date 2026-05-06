let balance = 0;

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = parseInt(document.getElementById("amount").value);

    if (!desc || !amount) return;

    balance += amount;

    document.getElementById("balance").innerText = "Balance: ₹" + balance;

    let li = document.createElement("li");
    li.innerText = desc + " : ₹" + amount;

    document.getElementById("list").appendChild(li);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}