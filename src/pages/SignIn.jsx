import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from "../context/AuthProvider/useAuth";

import { Footer } from "../components/Footer";
import { Input } from "../components/Form/Input";
import { Button  } from "../components/Form/Button";

const SigninSchema = yup.object({
    email: yup.string().email("E-mail invalido!").required("E-mail obrigatório!"),
    password: yup.string().min(8, "A senha precisar conter de 8 à 18 digitos!").max(18, "A senha precisar conter de 8 à 18 digitos!").required("Este campo é obrigatório!"),
}).required('Senha obrigatória!');

export function SignIn({openModal}){
    
    const auth = useAuth();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(SigninSchema),
    });

    async function Authenticated(values){
        try {
            await auth.signin(values.email, values.password);

            navigate('/dashboard')

        } catch (error) {
            alert("email or password invalid!")
        }
    };

    return (
        <>
            <div className="container-sign">
                <div className="signin">
                    <section className="content">
                        <header>
                            <h2>Dashboard</h2>
                        </header>
                        <main className="form-content">
                            <h4>Bem-vindo(a) ao Dashboard</h4>
                            <span>Faça login para entrar</span>
                            <form onSubmit={handleSubmit(Authenticated)} className="form">
                                <Input 
                                    label='E-mail'
                                    type='email'
                                    id='email-signin'
                                    placeholder='Seu e-mail'
                                    {...register("email")}
                                    error={errors.email}

                                />
                                <Input 
                                    label='Senha'
                                    type='password'
                                    id='senha-signin'
                                    placeholder='Sua senha'
                                    {...register("password")}
                                    error={errors.password}
                                />

                                <div className="submit-box">
                                    <Button type='submit' name='Entrar' />
                                    <button type='button' onClick={openModal}>esqueceu a senha?</button>
                                </div>
                            </form>
                        </main>
                        <footer>
                            <span>Ainda não tem uma conta?  </span>
                            <Link to={'/signup'} className='link-signup' > Criar Conta</Link>
                        </footer>
                    </section>
                </div>
            </div>

            <Footer/>        
        </>
    );
}