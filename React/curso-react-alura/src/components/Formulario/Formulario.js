import React, { Component } from 'react'
import FormValidator from '../../helpers/FormValidator'
import PopUp from '../PopUp/PopUp'


export default class Formulario extends Component {
    
    constructor(props){
        super(props)

        this.validador = new FormValidator(
        [
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Insira um nome!'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Insira um livro!'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [
                    {
                        min: 0, 
                        max: 9999
                    }
                ],
                validoQuando: true,
                mensagem: 'Insira um valor númerico!'
            },

    ]
        
        )

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial

    }

    escutadorDeInput = event => {

        const { name, value } = event.target

        this.setState({

            [name]: value

        })
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state)

        if( validacao.isValid ){
            this.props.escutadorDeSubmit(this.state)
            this.setState(this.stateInicial)
        } else{
            const {nome,livro, preco} = validacao
            const campos = [nome,livro,preco]

            const camposInvalidos = campos.filter( campo => {
                return campo.isInvalid
            })
            
            camposInvalidos.forEach( campo => {
                PopUp.exibeMensagem('error', campo.message)
            })
        }
        

      
    }



    render(){

        const { nome, livro, preco } = this.state

        return(
            <form >
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput }
                            />
                            
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="livro">Livro</label>
                        <input
                            className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput }
                            />
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="preco">Preço</label>
                        <input
                            className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput }
                            />
                    </div>

                        <button 
                            type="button"
                            className="waves effect waves light btn deep-purple valign-wrapper"
                            onClick={this.submitFormulario}
                        
                        >Salvar
                        </button>
                </div>
            </form>
        )
    }

}