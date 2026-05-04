function generate() {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let password = "";

    for (let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    document.getElementById("password").value = password;
}

function copy() {
    let input = document.getElementById("password");
    input.select();
    document.execCommand("copy");
    alert("Copied!");
}