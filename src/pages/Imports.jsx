import { useForm } from 'react-hook-form';
import { ArrowFatLineUp } from "phosphor-react";
import { Api } from '../services/api';

import {Footer} from '../components/Footer'
import { Button } from "../components/Form/Button";
import { Header } from "../components/Header";
import { Navbar } from "../components/Header/Navbar";


export function Imports() {

    const {register, handleSubmit, formState:{ errors, isSubmitting } } = useForm();

    async function onSubmit({account, plataform, check, file, tags}) {
        // const request = await Api.post('import', {account, plataform, check, file, tags});
        console.log('ok')
        // return request.data;
    }

    return (
        <>
            <Header/>
            <Navbar/>

            <div className="s-imports">
                <div className="container">
                    <div className="page-title">
                        <h4>Importar</h4>
                    </div>
                    <div className="import-area">
                        <div className="title-section">
                            <ArrowFatLineUp size={24}/>
                            <h6>IMPORTAÇÃO POR PLATAFORMA/CORRETORA</h6>
                        </div>
                        <span>Importar arquivos exportados da sua plataforma de negociação ou homebroker.</span>

                        <form onSubmit={handleSubmit(onSubmit)} className="form-content">
                            <div className="input-content">
                                <label htmlFor="select-acount">Selecione uma conta  </label>
                                <select name="select-acount" id="select-acount" {...register("account")}>
                                    <option value="opt-principal">Principal</option>
                                    <option value="opt-secundary">Alternativa</option>
                                </select>
                                <span>Data da última ordem inportada 2022-08-04</span>
                            </div>

                            <div className="input-content">
                                <label htmlFor="select-acount">Importação por plataforma/corretora</label>
                                <select name="select-plataform" id="select-plataform" {...register("plataform")}>
                                    <option value="opt-plataform01">Plataforma 01</option>
                                    <option value="opt-plataform02">Plataforma 02</option>
                                </select>
                                <span>Escolha uma opção para ver as instrução a esquerda.</span>
                            </div>

                            <div className="input-content checkbox">
                                <input type="checkbox" name="check-form" id="check-form" {...register("check")}/> 
                                Adicionar corretagem padrão?
                            </div>

                            <div className="input-content">
                                <label htmlFor="import-file">Selecione o arquivo</label>
                                <input type="file" id="import-file" required {...register("file", {required: true})} />
                                {errors.file && <span>Campo obrigatório</span>}
                            </div>

                            <div className="input-content">
                                <label htmlFor="">Tagear todos os trades com</label>
                                <select name="tags" id="tags" {...register("tags")}>
                                    <option value="tag01">Tag 01</option>
                                </select>
                            </div>

                            <div className="input-button">
                                <button type="submit" disabled={isSubmitting} className='btn-primary'>
                                    {isSubmitting? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}