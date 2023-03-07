import {createContext, useEffect, useState} from 'react';
import { getUserLocalStorage, LoginRequest, RegisterRequest, setUserLocalStorage } from './util';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }

    },[]);

    async function signin(email, password){
        const response = await LoginRequest(email, password);

        const payload = { token: response.token, email };

        setUser(payload);
        setUserLocalStorage(payload);
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
        <AuthContext.Provider value={{...user, signin, signup, logout}}>
            {children}
        </AuthContext.Provider>
    );
};