// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';


const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);
// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');
const userName = gi('userLogin');

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

export const getTask = (token, taskId) => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => { return result.json(); })
        .then(data => { userTask(data) })
        .catch(err => console.log(err));
};

// Objeto JSON Registro Usuário
let userTaskJson = "";
// const userName = gi('userLogin');

const userTask = data => {
    // userTaskJson = JSON.stringify(data);
    // sessionStorage.setItem('userTask', userTaskJson);
    // const userTaskData = sessionStorage.getItem('userTask');
    // const userTaskObj = JSON.parse(userTaskData);
    // console.log(userTaskObj)
    userTaskJson = JSON.stringify(data);
    userName.innerText = ' ';

};

// const observer = new MutationObserver(() => {
//     if (document.contains(taskBoard)) {
//         const deleteTaskBtn = qsa('#deleteTask')
//         deleteTaskBtn.forEach(e => {
            
//             // console.log(userTaskData)
//             e.addEventListener('click', () => {
//                 sessionStorage.setItem('userTask', userTaskJson);
//                 const userTaskData = sessionStorage.getItem('userTask');
//                 const userTaskObj = JSON.parse(userTaskData);
//                 console.log(userTaskObj)
//                 let task = e.parentElement.parentElement;
//                 let id = task.getAttribute('task-id');
//                 console.log(id)
//                 getTask(token, id)

//                 // if (id === userTaskObj.id) {
//                 //     console.log('igual')
//                 // } else {
//                 //     console.log('nao')
//                 // }
//                 // // console.log(taskBoard.removeChild(task));
//                 // task.parentNode.removeChild(task)
//                 // getTask()
//                 // console.log(userTaskObj)
//                 // console.log('123')
//             })
//             observer.disconnect();
//         })
//     };
// });

// observer.observe(taskBoard, { childList: true });