// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

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
        .then(result => { listUserTasks(result); })
        .catch(err => console.log(err));
};


const deleteTask = () => {

};
