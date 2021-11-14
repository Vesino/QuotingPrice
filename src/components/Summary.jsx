import React from 'react';
import styled from '@emotion/styled';
import { capitalize } from '../helper';

const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    border: 1px solid rgb(127, 224, 237);
    color: #00838F;;
    margin-top: 1rem;
`;

const Summary = ({data}) => {
    const {marca, year, plan} = data

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContainerSummary>
        <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca: {capitalize(marca)}</li>
            <li>Año: {year}</li>
            <li>Plan: {capitalize(plan)}</li>
        </ul>
        </ContainerSummary>
    );
}
 
export default Summary;