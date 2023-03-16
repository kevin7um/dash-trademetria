import React from 'react'
import { SquaresFour} from 'phosphor-react';

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

import IconStatistic from "../../img/Icon.png"

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
      
      <ResultBox resultTitle='Relatório DayTrader' Icon={SquaresFour}>
        <div className="dash-statistic">
          <div className="box-statistic">
              <div className="statistic">
                  <span>Fator de Lucro</span>
                  <h6>2.63/2.65</h6>
                  <div className="box-info">
                      <span>Bom</span>
                      <span>Aumente seu capital</span>
                  </div>
              </div>
              <div className="icon-statistic">
                  <img src={IconStatistic} />
              </div>
          </div>
        </div>
      </ResultBox>
    </Section>
  )
}
