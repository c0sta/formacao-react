class ListaNegociacoes {
    
    constructor(){
    
        this._negociacoes = []

        // Função q será passada para o construtor

    
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao)
    
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
    }

}