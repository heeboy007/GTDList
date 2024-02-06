import client from "./client";

const login = ({ email, password }) => {
    client.post('/user/login', { email, password });
}

const register = ({ email, password }) => {
    client.post('/user/register', { email, password });
}

//실제로는 user모듈에서 쓰임
const check = () => {
    client.get('/user/check');
}

const logout = () => {
    client.post('/user/logout');
}
///////////////////////////

export {
    login,
    register,
    check,
    logout
}