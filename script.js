function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields are required!");
    }
    else if (!email.includes("@")) {
        alert("Invalid email!");
    }
    else {
        alert("Form submitted successfully ✅");
    }
}

// TODO LIST
function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Enter task!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "X";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}