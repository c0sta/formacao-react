class View{
    constructor(elemento){
        this._elemento = elemento
    }

    /**
     * Para alertar os programadores que este método 
     * deve ser implementado na classe filha que herdar
     * de View
     */
    template(model){
        throw new Error('O método template deve ser implementado')
    }

    update(model){
        this._elemento.innerHTML = this.template(model)
    }
}