import {createContext, useEffect, useState} from 'react';
import { Api } from '../../services/api';
import { getUserLocalStorage, LoginRequest, RegisterRequest, setUserLocalStorage } from './util';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            // Api.get(`users/${user.token}`).then( response => {
            //     console.log(response.data);
            // })   

            setUser(user);
        }

    },[]);

    async function signin(email, password){
        try {
            const response = await LoginRequest(email, password);

            const payload = { token: response.token, email };

            setUserLocalStorage(payload);

            setUser(payload);

            return;
            
        } catch (error) {
            setErrorMessage('E-mail ou senha incorretos!')
            console.log(errorMessage)
        }
    };

    const signup = async (username, email, password) => {
        const response = await RegisterRequest(username, email, password);

        const payload = {token: response.token, id: response.id};
        setUser(payload);
        setUserLocalStorage(payload);
    };

    const logout = (callback) => {
        setUser(null);
        setUserLocalStorage(null);
        callback();
    };

    return (
        <AuthContext.Provider value={{...user, ...errorMessage, signin, signup, logout}}>
            {children}
        </AuthContext.Provider>
    );
};