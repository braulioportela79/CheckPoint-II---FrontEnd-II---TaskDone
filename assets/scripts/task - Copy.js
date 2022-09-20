import { getUser } from './api/getUser.js';
import { getUserTasks } from './api/getUserTasks.js';
import { createUserTask } from './api/createUserTask.js';
// import { getTask } from './api/getTask.js';

// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);

// Variável Botão Logout
const logoutBtn = gi('logout');

// Variável Campo Descrição Tarefa
const inputTask = gi('newTask');

// Variáveis do elemento button e do form
const form = qs('form');
const taskBtn = gi('createTaskButton');

// Variável Elementos Nome e Sobrenome Usuário
const userName = gi('userLogin');

// Objeto JS Tarefa Usuário
const task = {
    description: '',
    completed: false,
};

// Objeto JSON Tarefa Usuário
let taskJson = '';

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

getUser(token);

getUserTasks(token);



 userName.innerText = `${result.firstName} ${result.lastName}`


  // Base URL da API
  const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';


  const getTask = (token, taskId) => {
    const request = {
      method: "DELETE",
      headers: {
        'Authorization': token
      }
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
      .then(result => { return result.json(); })
      .then(result => {
        console.log(result)
        getUserTasks(token);
      })
      .catch(err => console.log(err));
  };


  // const task = qs('#taskContainer')
  setTimeout(()=>{
      const deleteTaskBtn = qsa('#deleteTask')
    // const taskContainer = qs('#taskContainer')
    // taskContainer.innerHTML = '123'

    deleteTaskBtn.forEach(e => {
      e.addEventListener('click', () => {
        // let id = el.path[3].getAttribute('task-id')
        let task = e.parentElement.parentElement
        let id = task.getAttribute('task-id')
        console.log(id)
        getTask(token, id)
    })
    
})
}, 1000)



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
    location = '/';
});