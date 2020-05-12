import { ROOTURL } from '../config'

export const signUp = (name, email, password ) => fetch(`${ROOTURL}/singUp`, {
    method: 'POST',
    body: JSON.stringify({name, email, password}),
    headers: {
        'Content-Type': 'application/json',
    },
}).then(respone => respone.json())