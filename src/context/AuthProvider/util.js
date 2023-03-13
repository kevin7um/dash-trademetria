import { Api } from "../../services/api";

// Adicionar e ler o Local Storage
export function setUserLocalStorage (user){
    localStorage.setItem('u', JSON.stringify(user));
}
export function getUserLocalStorage (){
    const json = localStorage.getItem('u');

    if(!json){
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}

export async function LoginRequest (email, password) {
    const request = await Api.post("login", {email, password});

    return request.data;
}

export async function RegisterRequest (username, email, password) {
    try {
        const request = await Api.post('register', {username, email, password});
    
        return request.data;

    } catch (error) {
        return error;
    }
}

export async function UserRequest(id){
    try {
        const request = await Api.get(`users/${id}`);

        return request.data;

    } catch (error) {
        return error
    }
}

export async function UserUpdate({id, name, surname, email, pass}){
    try {
        const request = await Api.put(`users/${id}`, {name, surname, email, pass});

        return request.data;

    } catch (error) {
        return error
    }
}

export async function UserDelete(id){
    try {
        const request = await Api.delete(`users/${id}`);

        return

    } catch (error) {
        return error
    }
}