const todoList = document.querySelector(".todo-list");
const todoCreateDiv = document.querySelector(".todo-create-container");
const inputTask = document.querySelector(".todo-create-input");
const addTaskBtn = document.querySelector(".todo-create-button");

const todos = [
  {
    "title": "Estudar",
    "done": false
  },
  {
    "title": "Para",
    "done": false
  },
  {
    "title": "Prova",
    "done": false
  },
  {
    "title": "Sim",
    "done": false
  },
  {
    "title": "estudar para prova",
    "done": false
  }
];

// INITIAL TODOS
generateTodo();

todoList.addEventListener("click", (e) => {
  const task = e.target.closest(".task");
  
  if (task) {
    const index = Array.from(todoList.children).indexOf(task);
    todos[index].done = !todos[index].done;
    generateTodo();
  }
});

todoCreateDiv.addEventListener("click", (e) => {
  if(e.target.className === "todo-create-header" 
  || e.target.className === "todo-create-container" 
  || e.target.tagName === "H3" 
  || e.target.tagName === "IMG") {

    todoCreateDiv.getAttribute("data-open") === "true" 
    ? todoCreateDiv.setAttribute("data-open", "false")
    : todoCreateDiv.setAttribute("data-open", "true") 
  }
});

inputTask.addEventListener("keyup", (e) => {
  if(e.key === "Enter") {
    return createTodo();
  }
})

addTaskBtn.addEventListener("click", createTodo);


function generateTodo() {
  if(todoList.offsetHeight > 800) {
    todos.filter((todo, index) => todo.done === true  ? todos.splice(index, 1) : null);
  }
      

    todoList.innerHTML = "";
  
    todos.map((value, index) => {
      todoList.innerHTML += `
        <div class="task ${value.done ? "completed" : "uncompleted"}">
          <label class="task-body ${value.done ? "green" : "red"}">
          <input type="checkbox" ${value.done ? "checked" : ""}>
            <p>
             ${value.title}
            </p>
          </label>
        </div>
      `;
    });
  }

function createTodo() {
  if(inputTask.value.trim() === "") return;

  todos.push(
    {
      "title" : inputTask.value,
      "done": false
    });

    inputTask.value = "";
    generateTodo();
}
