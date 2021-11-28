// elements
let todoInput = document.getElementById("todoInput");
let submitBtn = document.getElementById("submitBtn");
let todos = document.getElementById("todos");
let todosNb = document.getElementById("todosNb");
let deleteAllBtn = document.getElementById("deleteAll");

// compteur de todos
let nbTodos = 0;

// fonctions
const createDeleteBtn = () => {
  let deleteButton = document.createElement("div");
  deleteButton.classList.add("btn");
  deleteButton.innerHTML = '<ion-icon name="trash"></ion-icon>';

  // event suppression
  deleteButton.addEventListener("click", deleteTodo);

  return deleteButton;
};

const addTodo = () => {
  // creation d'un todo
  let todoText = todoInput.value;
  if (todoText == "") return;

  let newTodo = document.createElement("div");
  newTodo.classList.add("todo");
  newTodo.innerHTML = `<p>${todoText}</p>`;

  newTodo.appendChild(createDeleteBtn());

  // ajout du todo à la liste
  todos.appendChild(newTodo);
  todoInput.value = "";
  nbTodos++;
  todosNb.innerText = nbTodos;
};

const deleteTodo = (e) => {
  let todoEl = e.target.closest("div.todo");
  todoEl.remove();
  nbTodos--;
  todosNb.innerText = nbTodos;
};

const deleteAll = () => {
  todos.innerHTML = "";
  nbTodos = 0;
  todosNb.innerText = nbTodos;
};

submitBtn.addEventListener("click", addTodo);
deleteAllBtn.addEventListener("click", deleteAll);
