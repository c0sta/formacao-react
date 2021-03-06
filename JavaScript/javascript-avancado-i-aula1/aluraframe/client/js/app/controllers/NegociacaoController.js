class NegociacaoController {
    
    constructor(){
        /* 
        Ao usar o querySelector dentro do contructor evita 
        que a DOM seja percorrida a cada click do usuario
        já que será carregado ao construir o Objeto
        */
        let $ = document.querySelector.bind(document)
        this._inputQuantidade = $('#quantidade')
        this._inputData = $('#data')
        this._inputValor = $('#valor')

        this._negociacoesView = new NegociacoesView($('#negociacoesView'))

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona','esvazia']
        
        )

        /** 
         * Passamos como parametro o elemento onde 
         * nossa view será renderizada no HTML
         * 
         * */
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagem = new Bind( 
            new Mensagem(),
            this._mensagemView,
            ['texto']
            ) 
       
    }
    
    adiciona(event){

        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._mensagem.texto = 'Negociação adicionada com sucesso'
        this._limpaFormulario()

    }


    /**
     *  O underline em métodos significa
     *  que eles só podem ser chamados pela própria classe
     */
    _limpaFormulario(){

        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus()
    }


    _criaNegociacao(){

        return new Negociacao(
        
            DateHelper.textToDate(this._inputData.value),
        
            this._inputQuantidade.value,
        
            this._inputValor.value
        
            )
    }

    esvazia(){
        this._listaNegociacoes.esvazia() 

        this._mensagem.texto = 'Suas negociações foram apagadas com sucesso :)'
    }

    importaNegociacoes(){

        let service = new NegociacaoService()

        Promise.all([
            service.obterNegociacaoDaSemana(), 
            service.obterNegociacaoDaSemanaAnterior(), service.obterNegociacaoDaSemanaRetrasada()]
            ).then(
                negociacoes => {
                   negociacoes
                   .reduce( (arrayAchatado, array) => arrayAchatado.concat(array), [] )
                   .forEach( negociacao => this._listaNegociacoes.adiciona(negociacao))
                   this._mensagem.texto = 'Negociações importadas com sucesso'
                })
                .catch(
                error => this._mensagem.texto = error
                )

    }
/*
        service.obterNegociacaoDaSemana()
        .then( negociacoes => negociacoes.forEach( negociacao => {            this._listaNegociacoes.adiciona(negociacao) 
            this._mensagem = 'Negociações da semana obtida com sucesso'
        }))
        .catch( err => this._mensagem.texto = err ) 
        

        service.obterNegociacaoDaSemanaAnterior()
        .then( negociacoes => negociacoes.forEach( negociacao => {            this._listaNegociacoes.adiciona(negociacao) 
            this._mensagem = 'Negociações da semana anterior obtida com sucesso'
        }))
        .catch( err => this._mensagem.texto = err ) 


        service.obterNegociacaoDaSemanaRetrasada()
        .then( negociacoes => negociacoes.forEach( negociacao => {            this._listaNegociacoes.adiciona(negociacao) 
            this._mensagem = 'Negociações da semana retrasada obtida com sucesso'
        }))
        .catch( err => this._mensagem.texto = err ) 
*/


      /* Minha solução para o problema do Mês
        let date = this._inputData.value.split('-')
        let data = new Date(
            date[0],
            parseInt(date[1])-1,
            date[2]
            )
        console.log(data)
        */
}