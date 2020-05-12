import { ROOTURL } from '../config'

export const auth = (login, password, token) => fetch(`${ROOTURL}/user/login`, {
    method: 'POST',
    body: JSON.stringify({login, password}),
    headers: {
        'Content-Type': 'application/json',
        Authorization: token
    },
}).then(respone => respone.json())