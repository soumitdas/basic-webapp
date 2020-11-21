const form = document.getElementById("myform");
const todoList = document.getElementById("todos");

/*Check if already in localstorage then store that else blank array [] */
let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

let timeout;

/*Check if todos already in the local storage */
const handleTodoClick = (e) => {
  /*For the second time click */
  if (e.target.nodeName === "S") {
    window.clearTimeout(timeout);
    e.target.parentNode.innerHTML = e.target.innerText;
    e.target.remove();
    return;
  }
  /*For the every first time click */
  e.target.innerHTML = `<s>${e.target.innerText}</s>`;
  timeout = setTimeout(() => {
    e.target.remove();
    todos = todos.filter((todo) => todo !== e.target.innerText);
    saveTodos();
    alert("Completed Todo deleted");
  }, 4000);
};

/*Run Firsttime to render stored Todos */
if (todos !== undefined && todos instanceof Array) {
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("notification", "is-danger");
    todoDiv.onclick = handleTodoClick;
    todoDiv.innerText = todo;
    todoList.appendChild(todoDiv);
  });
}

const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!event.target.todo.value) {
    alert("You cannot enter blank TODO");
    return;
  }
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("notification", "is-danger");
  todoDiv.onclick = handleTodoClick;
  todoDiv.innerText = event.target.todo.value;

  // const todoLi = document.createElement("li")
  // todoLi.onclick = handleTodoClick
  // todoLi.innerText = event.target.todo.value
  todos.push(event.target.todo.value);
  saveTodos();
  event.target.todo.value = "";
  todoList.appendChild(todoDiv);
});
