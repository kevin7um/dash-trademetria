import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserCircle, XCircle, FloppyDisk } from "phosphor-react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Header/Navbar";
import { UserRequest, UserUpdate, UserDelete } from "../context/AuthProvider/util";

import ImageProfile from '../img/avatar-placeholder.webp';

const dataT = {
    name: 'Kevin',
    surname: 'William',
    email: 'kevin@william',
    pass: '',
}

export function Profile() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState(dataT);

    // async function getData(){
    //     const response = await UserRequest(2);
    //     setUserData(response.data)
    // }

    const {register, handleSubmit, formState:{ errors, isSubmitting, } } = useForm({
        mode: 'all',
        defaultValues: {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            pass: userData.pass,
        }
    });

    const userUpdate = async ( data ) => {
        const response = UserUpdate( data );

        return response;
    }

    function userDelete(){
        UserDelete(2);
        navigate('/);')
    }

    const onSubmit = async (values) => {
        // const data =  await userUpdate(values);

        const promise = await new Promise( (resolve) => setTimeout(() => {
            resolve('helo')
        }, 3000))

        setUserData(values);

    }

    return (
        <>
            <Header/>
            <Navbar/>

            <div className="s-profile">
                <div className="container">
                    <div className="page-title">
                        <h4>Perfil</h4>
                    </div>
                    <div className="user-edit">
                        <div className="left-area">
                            <div className="image-profile">
                                <img src={ImageProfile} alt="Image de Perfil" width="32px"/>
                            </div>
                            <h4>{userData.name}</h4>
                            <span>{userData.email}</span>
                            <button>Escolher foto</button>
                        </div>
                        <div className="right-area">
                            <div className="title-section">
                                <UserCircle size={24}/>
                                <h6>Dados do Pessoais</h6>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-content">
                                <div className="input-content">
                                    <div className="input-box">
                                        <label htmlFor="name">Nome</label>
                                        <input
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            {...register('name')} />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="surname">Sobrenome</label>
                                        <input 
                                        type="text" 
                                        name="surname" 
                                        id="surname"
                                        {...register('surname')} />
                                    </div>
                                </div>
                                <div className="input-content">
                                    <div className="input-box">
                                        <label htmlFor="email">E-mail</label>
                                        <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        {...register('email')} />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="pass">Password</label>
                                        <input 
                                        type="password" 
                                        name="pass" 
                                        id="pass" 
                                        placeholder="Digite uma nova senha"
                                        {...register('pass')} />
                                    </div>
                                </div>
                                <div className="input-button">
                                    <button type="submit" className="btn-primary green">
                                        <FloppyDisk /> 
                                        {isSubmitting ? 'Salvando dados...' : 'Salvar dados'}
                                    </button>
                                    <button onClick={userDelete} className="btn-primary">
                                        <XCircle /> Encerrar conta
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}