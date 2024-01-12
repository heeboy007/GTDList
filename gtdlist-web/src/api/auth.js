import client from "./client";

function register(args){
    const { email, password } = args;
    
    client.post('/user/register', { email, password })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

export {
    register
}