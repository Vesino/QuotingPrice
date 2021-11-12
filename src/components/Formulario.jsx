import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDifference, computeBrand } from '../helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 10rem
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    border-radius: 15px;
`;

const InputRadio = styled.input`
    margin: 0 1rem
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: .8rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 1rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
`;

const Formulario = () => {

    const [data, setData] = useState({
        marca: "",
        year: "",
        plan: "",
    })
    const [error, setError] = useState(false)

    const {marca, year, plan} = data;
    const obtainData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return;
        }
        setError(false)

        let result = 2000

        // diferencia de año -3% por año
        const yearDifference =  getYearDifference(year);

        // for every year we should discount 3%
        result -= ((yearDifference * 3) * result) / 100

        // Americano 15%
        // Asiatico 5%
        // Europeo 3%
        result = computeBrand(marca) * result
        console.log(result)

    }
    return ( 
       <form
        onSubmit={handleSubmit}
       >
           {error ? <Error>Todos los campos son obligatorios</Error> : null}
           <Campo>
               <Label htmlFor="marca">Marca</Label>
               <Select name="marca" id="marca" value={marca} onChange={obtainData}>
                   <option value="">--- Seleccione ---</option>
                   <option value="americano">Americano</option>
                   <option value="europeo">Europeo</option>
                   <option value="asiatico">Asiatico</option>

               </Select>
           </Campo>
           <Campo>
               <Label htmlFor="year">Año</Label>
               <Select name="year" id="year" value={year} onChange={obtainData}>
                    <option value="">--- Seleccione ---</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
               </Select>
           </Campo>
           <Campo>
               <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtainData}
                /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtainData}
                /> Completo
           </Campo>
           <Button type="submit">Cotizar</Button>
       </form> 
     );
}
 
export default Formulario;