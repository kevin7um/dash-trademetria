import { Gauge } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { DataTables } from '../../components/DataTable'

import { FilterBox } from '../../components/Reports/FilterBox'
import { ResultBox } from '../../components/Reports/ResultBox'
import { Section } from '../../components/Section'

//Fazer a requisição do PHP
import dataTable from '../../components/DataTable/object.json'

export function Trades() {
  const [data, setData] = useState(dataTable);

  return (
    <Section sectionName='trades' pageTitle='Relatório de Trades'>
      <FilterBox filterTitle='Filtre seu Trades'>
        Nenhum filtro para mostrar!
      </FilterBox>
      
      <ResultBox resultTitle='Mostrando todos os Trades' Icon={Gauge}>
       <DataTables data={data} tableId="table-trade"/>
      </ResultBox>
    </Section>
  )
}
