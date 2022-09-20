// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

// Funções para selecionar elementos
const gi = e => document.getElementById(e);

// Variável Elementos Nome e Sobrenome Usuário
const userName = gi('userLogin');

// Objeto JS Registro Usuário
const userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
};

// Objeto JSON Registro Usuário
let userDataJson = "";

// Função para pegar informações do usuário
export const getUser = token => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };
    fetch(`${baseUrl}/users/getMe`, request)
        .then(result => { return result.json(); })
        .then(result => {
            // userName.innerText = `${result.firstName} ${result.lastName}`
            // sessionStorage.setItem('user', result);
            console.log(result)
            userDataJson = JSON.stringify(result);
            sessionStorage.setItem('user', userDataJson);
        }
        )
        .catch(err => console.log(err));
};