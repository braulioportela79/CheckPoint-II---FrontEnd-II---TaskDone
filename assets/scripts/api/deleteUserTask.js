// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);
// Variável Elemento Quadro de Tarefas
const taskBoard = gi('taskBoard');

// Pegar token no Session Storage
let token = sessionStorage.getItem('token');

export const deleteUserTask = (token, taskId) => {
    const request = {
        method: "DELETE",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => { return result.json(); })
        .catch(err => console.log(err));
};

const observer = new MutationObserver(() => {
    const deleteTaskBtn = qsa('#deleteTask')
    if (document.contains(taskBoard)) {
        deleteTaskBtn.forEach(e => {
            e.addEventListener('click', () => {
                const taskBoard = gi('taskBoard');
                let task = e.parentElement.parentElement;
                let id = task.getAttribute('task-id');
                taskBoard.removeChild(task)
                deleteUserTask(token, id)
                const userTasks = sessionStorage.getItem('userTasks')
                const userTasksObj = JSON.parse(userTasks)
                const newUserTasksObj = userTasksObj.filter(e => e.id != id)
                let userTasksJson = JSON.stringify(newUserTasksObj)
                sessionStorage.setItem('userTasks', userTasksJson)
                renderUserTasks(userTasksObj)
                observer.disconnect();
            })
        })
    };
});

observer.observe(taskBoard, { childList: true });
