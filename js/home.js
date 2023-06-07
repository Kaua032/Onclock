const todoList = document.querySelector(".todo-list");
const todoCreateDiv = document.querySelector(".todo-create-container");
const inputTask = document.querySelector(".todo-create-input");
const addTaskBtn = document.querySelector(".todo-create-button");
const paintBtn = document.getElementById("paint-btn")
const paintPainel = document.getElementById('paint-painel')


/*Inputs Variables Change Colors */
const linguagensColorInput = document.getElementById('linguagens-bg-color-input')
const matematicaColorInput = document.getElementById('matematica-bg-color-input')
const naturezaColorInput = document.getElementById('natureza-bg-color-input')
const humanasColorInput = document.getElementById('humanas-bg-color-input')
const doneInput = document.getElementById('done')
const notDoneInput = document.getElementById('not-done')

/*Background Input Colors */
const bgLinguagens = document.getElementById('linguagens-bg-color')
const bgMatematica = document.getElementById('matematica-bg-color')
const bgNatureza = document.getElementById('natureza-bg-color')
const bgHumanas = document.getElementById('humanas-bg-color')
const bgDone = document.getElementById('label-done')
const bgNotDone = document.getElementById('label-not-done')

/*Border Colors Tasks */
const completedAll = document.querySelectorAll('.completed .task-body')
const uncompletedAll = document.querySelectorAll('.uncompleted .task-body')

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
          <label class="task-body">
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


paintBtn.addEventListener('click', () => {
  var displayStyle = window.getComputedStyle(paintPainel).display;
  if (displayStyle === "none") {
    paintPainel.style.display = "flex";
    paintBtn.style.backgroundColor = 'var(--bg1-color)'
  } else if (displayStyle === "flex") {
    paintPainel.style.display = "none";
    paintBtn.style.backgroundColor = 'var(--bg4--color-bar)'
  }
});

function exitPainel(name){
  document.getElementById(name).style.display = 'none'
  paintBtn.style.backgroundColor = 'var(--bg4--color-bar)'
}

linguagensColorInput.addEventListener('change', () => {
  bgLinguagens.style.backgroundColor = linguagensColorInput.value
})

matematicaColorInput.addEventListener('change', () => {
  bgMatematica.style.backgroundColor = matematicaColorInput.value
})

naturezaColorInput.addEventListener('change', () => {
  bgNatureza.style.backgroundColor = naturezaColorInput.value
})

humanasColorInput.addEventListener('change', () => {
  bgHumanas.style.backgroundColor = humanasColorInput.value
})




doneInput.addEventListener('change', () => {
  bgDone.style.backgroundColor = doneInput.value
  completedAll.forEach((element) => {
    element.style.borderColor = doneInput.value
  });
})

notDoneInput.addEventListener('change', () => {
  bgNotDone.style.backgroundColor = notDoneInput.value
})