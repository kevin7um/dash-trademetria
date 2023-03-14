import { SquaresFour } from "phosphor-react";
import { Link } from "react-router-dom";

import { SaldoResumePeriodo } from "../components/DashResume/SaldoResumePeriodo";
import { SaldoResume } from "../components/DashResume/SaldoResume";
import { DashStatistic } from "../components/DashStatistic";
import {ChartEvolucaoPatrimonio} from '../components/Charts/ChartEvolucaoPatrimonio';
import { ChartEvolucaoPatrimonioLancamento } from "../components/Charts/ChartEvolucaoPatrimonioLancamento";



const data = [
    {
        mes: "Valor",
        vd: 578.24,
        vm: 1078.24,
        va: 2678.24,
    },
    {
        mes: "Valor",
        vd: 1978.24,
        vm: 2978.24,
        va: 2078.24,
    },
    {
        mes: "Valor",
        vd: 1078.24,
        vm: 1578.24,
        va: 2678.24,
    },
    {
        mes: "Valor",
        vd: 578.24,
        vm: 2078.24,
        va: 3078.24,
    },
    {
        mes: "Valor",
        vd: 1078.24,
        vm: 2078.24,
        va: 4078.24,
    },
    {
        mes: "Valor",
        vd: 1978.24,
        vm: 2678.24,
        va: 3678.24,
    },
    
];


export function DashboardApp (){
    return (
        <div className="dashboard_app">
            <div className="atalho-relatorios">
                <div className="container">
                    <h4>Dashboard</h4>
                    <div className="atalho-content">
                        <Link to='/relatorios/trades' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Relatório de Trades</span>
                        </Link>
                        <Link to='/relatorios/desempenho' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Relatório de Desempenho</span>
                        </Link>
                        <Link to='/relatorios/instrumentos' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Relatório por instrumento</span>
                        </Link>
                        <Link to='/relatorios/calendario-trades' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Calendário Trader</span>
                        </Link>
                        <Link to='/relatorios/portifolio' >
                            <SquaresFour size={20} fill='#fff' weight="bold"/>
                            <span>Minhas custódias</span>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="dash-resume">
                <div className="container">
                    <div className="dash-result">
                        <SaldoResume/>

                        <SaldoResumePeriodo 
                            periodo="dia" 
                            valor="R$-1.770.85" 
                            porcentagem="-6.93%" 
                            data={data}
                            dataKey="vd" />

                        <SaldoResumePeriodo 
                            periodo="mês" 
                            valor="R$ 0"
                            porcentagem="0" 
                            data={data}
                            dataKey="vm"/>

                        <SaldoResumePeriodo 
                            periodo="ano" 
                            valor="R$ 0" 
                            porcentagem="0" 
                            data={data}
                            dataKey="va"/>
                    </div>

                    <DashStatistic />
                </div>
            </div>

            <div className="dash-chart">
                <div className="container">
                    <ChartEvolucaoPatrimonio/>
                    
                    <ChartEvolucaoPatrimonioLancamento/>
                </div>
            </div>
        </div>
    );
}