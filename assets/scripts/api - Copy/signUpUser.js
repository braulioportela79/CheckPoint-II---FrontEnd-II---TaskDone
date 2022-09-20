// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

export const signUpUser = user => {
    const request = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: user
    };

    fetch(`${baseUrl}/users`, request)
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
    console.log(result)
    // sessionStorage.setItem('token', result.jwt);
    // location = '/';
};

const errorLogin = erro => {
    console.log(erro);
};