import React, { Fragment, Component } from 'react'
import Header from '../Header/Header'
import Api from '../../services/Api'
import PopUp from '../PopUp/PopUp'

export default class Autores extends Component {
    
    constructor(props){
      super(props)
      this.state = {
        nomes: [],
        titulo: 'Autores'
      }
    }

    componentDidMount(){
      Api.ListaNomes()
      .then( res => Api.TrataErros(res) )
      .then( res => {
        if(res.message === 'success'){
          this.setState({
            nomes: [...this.state.nomes, ...res.data]
          })
          PopUp.exibeMensagem('success', 'Sucesso ao listar os autores')
        }
        
      })
      .catch(
        err => PopUp.exibeMensagem('error', 'Falha na comunicação com a API ao listar os autores')
      )
    }

    render(){
      return(
        <Fragment>
            <Header />
            <div className="container">
                
                <h1 className="center">Autores</h1>
                
                <table>
                    <thead style={{fontSize: '20px',fontWeight: 'bold'}}>
                        Autores
                    </thead>
                    <tbody>
                        {
                            this.state.nomes.map( autor => 
                            (  <tr key={autor.id}>
                                    <td>{autor.nome}</td>
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
