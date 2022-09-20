import { getUser } from './api/getUser.js';
import { getUserTasks } from './api/getUserTasks.js';
import { createUserTask } from './api/createUserTask.js';
import { deleteUserTask } from './api/deleteUserTask.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);

// Variável Botão Logout
const logoutBtn = gi('logout');

// Variável Campo Descrição Tarefa
const inputTask = gi('newTask');

// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');

// Variáveis do elemento button e do form
const form = qs('form');
const taskBtn = gi('createTaskButton');

// Objeto JS Tarefa Usuário
const task = {
  description: '',
  completed: false,
};

// Objeto JSON Tarefa Usuário
let taskJson = '';

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

onload = () => {
  getUser(token);
  getUserTasks(token);
};

// const observer = new MutationObserver(() => {
//   if (document.contains(taskBoard)) {
//     const deleteTaskBtn = qsa('#deleteTask')
//     deleteTaskBtn.forEach(e => {
//       e.addEventListener('click', () => {
//         let task = e.parentElement.parentElement;
//         let id = task.getAttribute('task-id');
//         console.log(task.id);
//         // console.log(taskBoard.removeChild(task));
//         deleteUserTask(token, id)
//         task.parentNode.removeChild(task)
//       })
//       observer.disconnect();
//     })
//   };
// });

// observer.observe(taskBoard, { childList: true });

// Função para adicionar tarefa
taskBtn.addEventListener('click', e => {
  e.preventDefault();
  task.description = inputTask.value.replace(/\n/g, " ");
  taskJson = JSON.stringify(task);
  createUserTask(taskJson);
  form.reset();
});

// Função para deslogar usuário
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  location = '/';
});