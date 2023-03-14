import { Gauge } from 'phosphor-react'
import React from 'react'
import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Kpis() {
  return (
    <Section sectionName='kpis' pageTitle='Relatório de Desempenho'>
      <FilterBox filterTitle='Filtrar'>
         <form className="filter-form">
          <div className="row">
            <select name="select-date" id="select-date">
              <option value="hoje">Hoje</option>
              <option value="ontem">Ontem</option>
              <option value="sete-dias">Últimos 7 dias</option>
              <option value="trinta-dias">Últimos 30 dias</option>
              <option value="mes">Este mês</option>
              <option value="mes-anterior">Mês Anterior</option>
              <option value="ano">Este ano</option>
              <option value="tudo">Tudo</option>
            </select>

            <select name="select-conta" id="select-conta">
              <option value=""></option>
              <option value="principal">Principal</option>
            </select>

            <select name="tags" id="tags">
              <option value=""></option>
              <option value="tags">tags</option>
            </select>

            <select name="select-instrumento" id="select-instrumento">
              <option value="instrumento">Instrumento</option>
              <option value="acoes">Ações</option>
              <option value="opcoes">Opções</option>
              <option value="futuros">Futuros</option>
              <option value="forex">Forex</option>
              <option value="cryptos">Cryptos</option>
              <option value="cfds">Cfds</option>
            </select>

            <input type="text" placeholder='Código'/>
          </div>

          <div className="row">
            <input type="text" placeholder='Variação de Preço'/>

            <input type="time" placeholder='Horário de'/>

            <input type="time" placeholder='Horário até'/>

            <input type="text" placeholder='% limite'/>

            <select name="select-day" id="select-day">
              <option value="">Dia</option>
              <option value="segunda">Segunda</option>
              <option value="terca">Terça</option>
              <option value="quarta">Quarta</option>
              <option value="quinta">Quinta</option>
              <option value="sexta">Sexta</option>
              <option value="sabado">Sabado</option>
              <option value="domingo">Domingo</option>
            </select>

            <button className='btn-primary' type="submit">Filtrar</button>
            <button >Limpar</button>
          </div>
        </form>
      </FilterBox>
      
      <ResultBox resultTitle='Mostrando todos os Trades' Icon={Gauge}> 
        Nenhum resultado para mostrar!
      </ResultBox>
    </Section>
  )
}
