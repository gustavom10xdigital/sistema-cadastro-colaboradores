
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

      const times = [

        {
          nome: 'dotlib - Cognys-AI',
          corPrimaria: '#57C278',
          corSecundaria: '#D9F7E9'
        },
        {
          nome: 'Unlock Platform',
          corPrimaria: '#82CFFA',
          corSecundaria: '#E8F8FF'
        },
        {
          nome: 'Compre Sua Peça',
          corPrimaria: '#A6D157',
          corSecundaria: '#F0F8E2'
        },
        {
          nome: 'FMU - Level UP',
          corPrimaria: '#E06B69',
          corSecundaria: '#FDE7E8'
        },
        {
          nome: 'Mundial Editora - bookplay',
          corPrimaria: '#DB6EBF',
          corSecundaria: '#FAE9F5'
        },
        {
          nome: '2Gather',
          corPrimaria: '#FFBA05',
          corSecundaria: '#FFF5D9'
        },
        {
          nome: 'e.studio',
          corPrimaria: '#FF8A29',
          corSecundaria: '#FFEEDF'
        },
        {
          nome: 'Scaleup',
          corPrimaria: '#6A5ACD',
          corSecundaria: '#E6E6FA'
        },
        {
          nome: 'PUCPR',
          corPrimaria: '#228B22',
          corSecundaria: '#E0FFE0'
        },
        {
          nome: 'Colégio Maristas',
          corPrimaria: '#FF6347',
          corSecundaria: '#FFE4E1'
        },
        {
          nome: 'greenv',
          corPrimaria: '#20B2AA',
          corSecundaria: '#E0FFFF'
        }


    ]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  setColaboradores([...colaboradores, colaborador])
}

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) }/>

      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}

    </div>
  );
}

export default App;
