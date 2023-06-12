const todoList = document.querySelector(".todo-list");
const todoCreateDiv = document.querySelector(".todo-create-container");
const inputTask = document.querySelector(".todo-create-input");
const addTaskBtn = document.querySelector(".todo-create-button");
const paintBtn = document.getElementById("paint-btn");
const paintPainel = document.getElementById('paint-painel');


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
const recentWeek = document.getElementById('recentWeek');
const headerRecentDate = document.getElementById('recentDate')

const day = new Date().getDate();
const weekDay = new Date().getDay();
const month = new Date().getMonth();

const monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const weekDayName = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const week = [];

/*Border Colors Tasks */
const completedAll = document.querySelectorAll('.completed .task-body');
const uncompletedAll = document.querySelectorAll('.uncompleted .task-body');


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
};


paintBtn.addEventListener('click', () => {
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





window.addEventListener('DOMContentLoaded', () =>{
  const weekDays = [];
  let recentNumberDay = day;
  recentWeek.innerHTML = ""
  headerRecentDate.innerHTML += `${new Date().getDate()} ${monthName[new Date().getMonth()]} ${new Date().getFullYear()}`

  if(weekDay > 0){
    for(let i = weekDay; i > 0; i-- ){
      if(i == weekDay){
        recentNumberDay -= weekDay;
        week.push(recentNumberDay);
      }
      recentNumberDay++;
      week.push(recentNumberDay);
    }
    for(let i = weekDay; i < 6; i++){
      recentNumberDay = day;
      week.push(recentNumberDay + i);
    }
  }


  for(let i = 0; i < 7; i++){
    if( i == weekDay && day == week[i]){
      recentWeek.innerHTML += `
    <div class="weekDay" style="background-color: #00286A;">
      <p>${weekDayName[i]}</p>
      <p class="numberDay">${week[i]}</p>
      <p>${monthName[month]}</p>
    </div>
    `;
    }
    else{
      recentWeek.innerHTML += `
      <div class="weekDay">
        <p>${weekDayName[i]}</p>
        <p class="numberDay">${week[i]}</p>
        <p>${monthName[month]}</p>
      </div>
      `;
    }
  }
  recentWeek.innerHTML += `
    <div id="buttons">
      <button id="cima" onclick='previous()'></button>
      <button id="baixo" onclick='next()'></button>
    </div>
  `;

});

function previous(){
  recentWeek.innerHTML = ""
  for(let i = 0; i < 7; i++){
    if(i == weekDay && day == week[i] - 7){
      recentWeek.innerHTML += `
    <div class="weekDay" style="background-color: #00286A;">
      <p>${weekDayName[i]}</p>
      <p class="numberDay">${week[i] -= 7}</p>
      <p>${monthName[month]}</p>
    </div>
    `;
    }
    else{
        week[i] -= 7
        recentWeek.innerHTML += `
        <div class="weekDay">
          <p>${weekDayName[i]}</p>
          <p class="numberDay">${week[i]}</p>
          <p>${monthName[month]}</p>
        </div>
        `;
    }
  }
  console.log(week)
  recentWeek.innerHTML += `
    <div id="buttons">
      <button id="cima" onclick='previous()'></button>
      <button id="baixo" onclick='next()'></button>
    </div>
  `;
}




function next(){
  recentWeek.innerHTML = ""
  for(let i = 0; i < 7; i++){
    if(i == weekDay && day == week[i] + 7){
      recentWeek.innerHTML += `
    <div class="weekDay" style="background-color: #00286A;">
      <p>${weekDayName[i]}</p>
      <p class="numberDay">${week[i] += 7}</p>
      <p>${monthName[month]}</p>
    </div>
    `;
    }
    else{
      recentWeek.innerHTML += `
      <div class="weekDay">
        <p>${weekDayName[i]}</p>
        <p class="numberDay">${week[i] += 7}</p>
        <p>${monthName[month]}</p>
      </div>
      `;
    }
  }
  recentWeek.innerHTML += `
    <div id="buttons">
      <button id="cima" onclick='previous()'></button>
      <button id="baixo" onclick='next()'></button>
    </div>
  `;
}