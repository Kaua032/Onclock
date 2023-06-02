const todoList = document.querySelector(".todo-list");

const todos = [
  {
    "title": "Estudar para prova",
    "color": "red",
    "done": false
  },
  {
    "title": "Estudar para prova",
    "color": "red",
    "done": false
  },
  {
    "title": "Estudar para prova",
    "color": "green",
    "done": false
  },
  {
    "title": "Estudar para prova",
    "color": "green",
    "done": false
  },
  {
    "title": "Estudar para prova",
    "color": "green",
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

function generateTodo() {
    todoList.innerHTML = "";
  
    todos.map((value, index) => {
      todoList.innerHTML += `
        <div class="task ${value.done ? "completed" : "uncompleted"}">
          <label class="task-body ${value.color}">
            <input type="checkbox" ${value.done ? "checked" : ""}>
            <p>
              <span>${index + 1}</span> - ${value.title}
            </p>
          </label>
        </div>
      `;
    });
  }