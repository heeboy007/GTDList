import client from "./client";

const login = ({ username, password }) => {
    client.post('/user/login', { username, password });
}

const register = ({ username, password }) => {
    client.post('/user/register', { username, password });
}

const check = () => {
    client.get('/user/check');
}

const logout = () => {
    client.post('/user/logout');
}

export {
    login,
    register,
    check,
    logout
}