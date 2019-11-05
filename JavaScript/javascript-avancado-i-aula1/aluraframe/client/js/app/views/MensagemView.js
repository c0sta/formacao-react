class MensagemView extends View {

    constructor(elemento){
        super(elemento)
    }

    _template(modelo){

        return modelo.texto ? `
           <p class="alert alert-info">${modelo.texto}</p>`
           :
           '<p></p>'
    }

}