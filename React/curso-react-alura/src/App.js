import React from 'react';
import './App.css';

// COMPONENTS
import Tabela from './components/tabela/Tabela'

function App() {

  const  autores =  [
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    }
  ];


  return (

    <div className="App">
      <Tabela autores={autores} />
    </div>

  );
}

export default App;
