import React, { Fragment, Component } from 'react'
import Header from '../Header/Header'
import Api from '../../services/Api'
import PopUp from '../PopUp/PopUp'
export default class Livros extends Component{
      constructor(props){
        super(props)
        this.state = {
          livros: [],
          titulo: 'Livros'
        }
      }

      componentDidMount(){
        Api.ListaLivros()
        .then( res => Api.TrataErros(res))
        .then( res => {
          if(res.message === 'success'){
            this.setState({
              livros: [...this.state.livros, ...res.data]
            })
            PopUp.exibeMensagem('success', 'Sucesso ao listar os livros')
        }
        
        } 
        )
        .catch( err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar os livros'))
      }

      render() {
        return(
          <Fragment>
              <Header />
              <div className="container">
                  
                  <h1 className="center">Livros</h1>
                  
                  <table>
                      <thead style={{fontSize: '20px',fontWeight: 'bold'}}>
                          Livros
                      </thead>
                      <tbody>
                          {
                              this.state.livros.map( livro => 
                              (  <tr key={livro.id}>
                                      <td>{livro.livro}</td>
                                  </tr>
                              ))
                          }            
                      </tbody>
                  </table>
              </div>
          </Fragment>
        )
      }
}
