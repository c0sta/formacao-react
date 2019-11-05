class MensagemView {

    constructor(elemento){
        this._elemento = elemento
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo)
    }

    _template(modelo){

        return modelo.texto ? `
           <p class="alert alert-info">${modelo.texto}</p>`
           :
           '<p></p>'
    }

}