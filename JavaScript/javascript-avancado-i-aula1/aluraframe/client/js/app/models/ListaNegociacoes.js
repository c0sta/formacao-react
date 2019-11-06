class ListaNegociacoes {
    
    constructor(armadilha){
    
        this._negociacoes = []

        // Função q será passada para o construtor
        this._armadilha = armadilha

    
    }

    adiciona(negociacao){
    
        this._negociacoes.push(negociacao)
        this._armadilha(this)
    
    }

    get negociacoes(){
        /** Programação Defensiva
         * Irá retornar uma nova lista COM o conteudo 
         * da lista de negociacoes.
         * Dessa forma não será possível alterar a lista original e sim
         * uma cópia dela
         */
        return [].concat(this._negociacoes)

    }

    esvazia(){
        this._negociacoes = []
        this._armadilha(this)
    }

}