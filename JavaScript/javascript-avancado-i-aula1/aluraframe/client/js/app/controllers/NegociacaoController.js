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
        
        let self = this
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(),

        {
            get(target, prop, receiver){
 
                if(['adiciona', 'esvazia'].includes(prop) && 
                typeof(target[prop] == typeof(Function)) ) {

                    return function(){

                        console.log(` interceptando ${prop}` )

                        Reflect.apply(target[prop], target, arguments)

                        self._negociacoesView.update(target)
                       
                    }
 
                }
                return Reflect.get(target, prop, receiver)
            }
        })

        /** 
         * Passamos como parametro o elemento onde 
         * nossa view será renderizada no HTML
         * 
         * */ 
        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)
   
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView.update(this._mensagem)
    }
    
    adiciona(event){

        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())

        this._mensagem.texto = 'Negociação adicionada com sucesso'
        this._mensagemView.update(this._mensagem)

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
        this._mensagemView.update(this._mensagem)
    }


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