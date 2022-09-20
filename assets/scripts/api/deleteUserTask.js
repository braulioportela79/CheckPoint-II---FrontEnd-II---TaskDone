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
        .then(result => {

            // taskBoard.removeChild()
            console.log(result)
        })

        .catch(err => console.log(err));
};


const observer = new MutationObserver((e) => {
// console.log(e)
    const deleteTaskBtn = qsa('#deleteTask')
    if (document.contains(taskBoard)) {
        // console.log('123')
        deleteTaskBtn.forEach(e => {
            console.log(e)
            e.addEventListener('click', () => {
                const taskBoard = gi('taskBoard');
                let task = e.parentElement.parentElement;
                let id = task.getAttribute('task-id');
                console.log(id)
                deleteUserTask(token, id)
                taskBoard.removeChild(task)
            })
        })
    };
    observer.disconnect();
});

observer.observe(taskBoard, { childList: true, characterData: false, subtree:true, attributes: true });
