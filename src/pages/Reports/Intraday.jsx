import React from 'react'
import { Gauge} from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

export function Intraday() {
  return (
    <Section sectionName='intraday' pageTitle='Relatório Daytrader'>
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

            <input type="text" placeholder='Código'/>

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
