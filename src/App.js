import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradore] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradore([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
