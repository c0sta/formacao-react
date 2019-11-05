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
        this._listaNegociacoes = new ListaNegociacoes()
    }
    
    adiciona(event){

        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
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