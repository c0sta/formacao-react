import React,{Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

import Api from './services/Api'

// COMPONENTS
import Header from './components/Header/Header'
import Tabela from './components/Tabela/Tabela'
import Form from './components/Formulario/Formulario'
import PopUp from './components/PopUp/PopUp'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      autores: []
    }
  }


removeAutor = id => {

  const { autores } = this.state

  const autoresAtualizado = autores.filter( 
    autor => autor.id !== id )

  Api.RemoveAutor(id)
    .then( res => Api.TrataErros(res) )
    .then( res => {

      if(res.message === 'deleted') { 
        this.setState( { autores : [...autoresAtualizado ] } )
        PopUp.exibeMensagem('success', 'Autor removido com sucesso')
      }
    })
    .catch( err => PopUp.exibeMensagem('error','Falha ao remover autor') )
}


escutadorDeSubmit = autor => {
  
  Api.CriaAutor( JSON.stringify(autor) )
    .then( res => Api.TrataErros(res) )
    .then( res => {
      if(res.message === 'success'){
        this.setState( {autores: [...this.state.autores, res.data] } )
        PopUp.exibeMensagem('success', 'Autor adicionado com sucesso')
      }
    })
    .catch( err => PopUp.exibeMensagem('error', 'Erro na comunicação com a API ao criar autor' ) )
}

componentDidMount(){
  Api.ListaAutores()
  .then( res => Api.TrataErros(res))
  .then( res =>  {
    if(res.message === 'success'){
      this.setState({autores: [...this.state.autores, ...res.data]})
    }
  })
  .catch( err => PopUp.exibeMensagem('error', 'Erro ao lista os autores') )
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

