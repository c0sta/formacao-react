/**
 *      this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona','esvazia']
        
        )
 */

class Bind {
    constructor(model, view, props){
        
        let proxy = ProxyFactory.create(model,props,(model) => view.update(model))

        view.update(model)
        /**
         * Construtores em JS podem retornar qualquer coisa, 
         * não apenas uma instância da classe
         */
        return proxy;

    }
}