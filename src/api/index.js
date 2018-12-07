export const HOST = "http://localhost:9000";

export const postClientRegister = (client) => fetch(`${HOST}/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(client),
});

export const postLoginRegister = ({email, password}) => fetch(`${HOST}/auth`, {
    method: 'POST',
    headers: {
        'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
    },
});

export default {
    postClientRegister,
    postLoginRegister,
}
