const todoList = document.querySelector(".todo-list");
const todoCreateDiv = document.querySelector(".todo-create-container");
const inputTask = document.querySelector(".todo-create-input");
const addTaskBtn = document.querySelector(".todo-create-button");
const paintBtn = document.getElementById("paint-btn");
const paintPainel = document.getElementById('paint-painel');
const perfilBtn = document.getElementById('perfil-btn');
const profilePainel = document.getElementById('profile-painel');


/*Inputs Variables Change Colors */
const linguagensColorInput = document.getElementById('linguagens-bg-color-input');
const matematicaColorInput = document.getElementById('matematica-bg-color-input');
const naturezaColorInput = document.getElementById('natureza-bg-color-input');
const humanasColorInput = document.getElementById('humanas-bg-color-input');

/*Background Input Colors */
const bgLinguagens = document.getElementById('linguagens-bg-color');
const bgMatematica = document.getElementById('matematica-bg-color');
const bgNatureza = document.getElementById('natureza-bg-color');
const bgHumanas = document.getElementById('humanas-bg-color');


/* Calender Variables */ 
const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span")
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


/*Border Colors Tasks */
const completedAll = document.querySelectorAll('.completed .task-body');
const uncompletedAll = document.querySelectorAll('.uncompleted .task-body');

/* Variables Classes */
const lessonsAll = document.getElementById('lessons')

const borderLingua = document.querySelectorAll(".lingua")
const borderMate = document.querySelectorAll(".mate")
const borderNatu = document.querySelectorAll(".natu")
const borderHuman = document.querySelectorAll(".human")




const todos = [];

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
};

perfilBtn.addEventListener('click', () => {
  paintPainel.style.display = "none";
  paintBtn.style.backgroundColor = 'var(--bg4--color-bar)';

  var displayStyle = window.getComputedStyle(profilePainel).display;
  if (displayStyle === "none") {
    profilePainel.style.display = "flex";
    perfilBtn.style.backgroundColor = 'var(--bg1-color)';
  } else if (displayStyle === "flex") {
    profilePainel.style.display = "none";
    perfilBtn.style.backgroundColor = 'var(--bg4--color-bar)';
  }
});

paintBtn.addEventListener('click', () => {
  profilePainel.style.display = "none";
  perfilBtn.style.backgroundColor = 'var(--bg4--color-bar)';

  var displayStyle = window.getComputedStyle(paintPainel).display;
  if (displayStyle === "none") {
    paintPainel.style.display = "flex";
    paintBtn.style.backgroundColor = 'var(--bg1-color)';
  } else if (displayStyle === "flex") {
    paintPainel.style.display = "none";
    paintBtn.style.backgroundColor = 'var(--bg4--color-bar)';
  }
});

function exitPainel(name){
  document.getElementById(name).style.display = 'none';
  paintBtn.style.backgroundColor = 'var(--bg4--color-bar)';
}

linguagensColorInput.addEventListener('change', () => {
  bgLinguagens.style.backgroundColor = linguagensColorInput.value;

  Array.prototype.forEach.call(borderLingua, element => {
    element.style.borderColor = linguagensColorInput.value;
    element.style.borderWidth = "10px";
    element.style.borderStyle = "solid";
  });
});

matematicaColorInput.addEventListener('change', () => {
  bgMatematica.style.backgroundColor = matematicaColorInput.value;
});

naturezaColorInput.addEventListener('change', () => {
  bgNatureza.style.backgroundColor = naturezaColorInput.value;
});

humanasColorInput.addEventListener('change', () => {
  bgHumanas.style.backgroundColor = humanasColorInput.value;
});







const rederCalender = () => {
  document.querySelector("#day").innerHTML = new Date().getDate()
  document.querySelector("#month").innerHTML = months[new Date().getMonth()]


  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay()
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth ).getDay();
  let lastDateofLastMonth  = new Date(currYear, currMonth, 0).getDate()
  let liTag = "";


  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive" >${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let today = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""

    liTag += `<li class="${today}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive" >${i - lastDayofMonth + 1}</li>`;
  }


  currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
}
rederCalender();

prevNextIcon.forEach(icon => {
  icon.addEventListener("click", () =>{
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1; 

    if(currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }
    else{
      date = new Date();
    }
    rederCalender();
  });
});


const fetchData = async () => {
  await fetch("../classes.json").then((response) => response.json()).then((data) => {
     data.map((value) => {
          lessonsAll.innerHTML +=`
          <div class="lesson ${value.materia}">
            <div class="title-hour">
              <h2>${value.title}</h2>
              <div>
                ${value.horaInicio} - ${value.horaFinal}
              </div>
            </div>
            <div class="lesson-description">
              <div class="room-description">
                <p>Sala: ${value.sala}</p>
                <p class="description">${value.description}</p>
              </div>
              <p class="discipline discipline-${value.materia}">${value.nomeMateria}</p>

            </div>
          </div>
          `
     })
  });
}
fetchData()