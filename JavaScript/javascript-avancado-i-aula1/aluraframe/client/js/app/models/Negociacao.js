class Negociacao{

    constructor(data, quantidade, valor) {

        // Usar o _ (underline) como convenção de que o atributo 
        // só pode ser acessado pelos Métodos da Classe
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor

        /* Encapsulamento com JS
        Congela o Objeto e suas propriedades, impossibilitando que os mesmos sejam 
         alterados.
         No entanto, ele não congela propriedades de objetos aninhados no objeto congelado
         por exemplo o Date(), dessa forma ainda sendo possível alterar 
         as propriedades desses objetos
         */

        Object.freeze(this)

    }

    /* 
    Sintaxe "get" permite que acessemos 
     as propriedades com o mesmo nome do método 
     */

    get data(){
        /* 
        Programação Defensiva 
            Retornamos a classe Date() e passamos como parametro
            o valor retornado pelo método .getTime() da nossa this._data
        */
        return new Date(this._data.getTime())
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }

    get volume() {
        return this._quantidade * this._valor
    }

}

/* 
Ao utilizar o LET fazemos com que a variavel possa ter
 escopo de bloco, já com o VAR isso NÃO é possível,
 ou seja, ao usar o VAR a variável pode ser acessada globalmente 
*/
let hoje = new Date()
let n1 = new Negociacao(hoje, 5, 700)


console.log(n1.data)

console.log(n1)




