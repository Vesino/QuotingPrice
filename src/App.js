import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import styled from '@emotion/styled';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({})
  const [loading, setLoading] = useState(false)

  const {quote, data} = summary
  return (
    <Contenedor>
      <Header 
        titulo="Quoting Price"
      />
    <ContenedorFormulario>
      <Formulario
        setSummary={setSummary}
        setLoading={setLoading}
      />
      {
        loading ? <Spinner/> : null
      }
      {
        (Object.keys(summary).length > 0) && !loading ?
        <Summary
          data={data}
        />
        :
        null
      }
      {
        quote && !loading &&
        <Result
          quote={quote}
        />
      }
    </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
