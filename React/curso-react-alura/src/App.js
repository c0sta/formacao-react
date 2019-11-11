import React,{Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

// COMPONENTS
import Header from './components/Header/Header'
import Tabela from './components/Tabela/Tabela'
import Form from './components/Formulario/Formulario'

export default class App extends Component {
  
  state = {
    autores: [
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
    ]
  }

removeAutor = index => {

  const { autores } = this.state

  this.setState(
    {
      autores: autores.filter( (autor, posAtual) => {
        console.log(index, posAtual)
        return posAtual !== index;
      }) 
    }
  )

}

escutadorDeSubmit = autor => {
  this.setState({
    autores: [...this.state.autores, autor]
  })
}

  render(){

    return (
      <Fragment>
        <Header />
        <div className="container">
          <Form escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>

        <div className="container">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />  
        </div>
        
      </Fragment>
    );

  }
}

