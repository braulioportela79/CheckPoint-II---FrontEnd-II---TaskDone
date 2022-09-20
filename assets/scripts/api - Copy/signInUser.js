// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

export const signInUser = user => {
    const request = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: user
    };

    fetch(`${baseUrl}/users/login`, request)
        .then(result => {
            if (result.status == 200 || result.status == 201) {
                return result.json();
            } else {
                throw result;
            };
        })
        .then(result => successLogin(result))
        .catch(err => errorLogin(err));
};

const successLogin = result => {
    sessionStorage.setItem('token', result.jwt);
    location = './pages/tarefas.html';
};

const errorLogin = err => {
    console.log(err);
};