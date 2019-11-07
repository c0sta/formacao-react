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

    importaNegociacoes(){
        // Requisão com AJAX
        let xhr = new XMLHttpRequest()
        
        xhr.open('GET', 'negociacoes/semana')
        
        
        xhr.onreadystatechange = () => {
            /* Configuraçṍes */
            /*
             * 0: requisição não iniciada
             * 1: conexão com o servidor estabelecido
             * 2: requisição recebida
             * 3: processando requisição
             * 4: requisição concluida e a resposta está pronta
             */

            if(xhr.readyState === 4){
                
                if(xhr.status === 200){
                    console.log('deu certo')

                    JSON.parse(xhr.responseText)
                        .map( objeto => new Negociacao(
                            new Date(objeto.data),
                            objeto.quantidade,
                            objeto.valor
                            ))
                        .forEach(negociacao => {
                            this._listaNegociacoes.adiciona(negociacao)
                            console.log(negociacao)
                        })
                }else {
                    console.log('Deu ruim')
                    this._mensagem.texto = 'Não foi possivel obter negociações da semana'
                }
        }        
        //alert('certin')
    }
    xhr.send()
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