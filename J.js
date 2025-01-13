let todos = [];

function AddState() {
    todos.push({
        title: document.querySelector("input").value
    })
    render();
}

function del(index) {
    todos.splice(index, 1);
    render();
}

function edit(index) {
    // Get the input value
    let value = document.querySelector("input").value.trim();
    if (value === "") {
        alert("Please enter a valid task title before editing.");
        return;
    }

    // Update the task in the todos array
    todos[index].title = value;

    // Clear the input field after editing
    document.querySelector("input").value = "";

    // Render the updated list
    render();
}



function addState(todo, val) {
    let value = todo.title;
    let div = document.createElement("div");
    let h = document.createElement("span");
    let button = document.createElement("button");
    let edit = document.createElement("button");
    h.innerHTML = value;
    button.innerHTML = "delete";
    edit.innerHTML = "Edit";
    div.append(h);
    div.append(button);
    div.append(edit);
    button.setAttribute("onclick", "del(" + val + ")");
    edit.setAttribute("onclick", "edit(" + val + ")");
    return div;
}


function render() {
    document.querySelector(".todo").innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let ele = addState(todos[i], i);
        document.querySelector(".todo").appendChild(ele);
    }
}