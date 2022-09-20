import { listUserTasks } from '../modules/listUserTasks.js';

// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

// Função para mostrar as tarefas do usuário
export const getUserTasks = token => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks`, request)
        .then(result => { return result.json(); })
        .then(result => { listUserTasks(result); })
        .catch(err => console.log(err));
};