

class DateHelper{

    
    /**
     *  Métodos estáticos podem ser invocados DIRETAMENTE nas classes
     *  sem ser necessário instanciar 
     */

     constructor(){

         throw new Error('DateHelper não pode ser instanciado') 
     }

    static textToDate(texto){
        /*        
        1)   Ao usar o Spread fazemos com que
           cada posição do array _inputData seja 
           passado como CADA parâmetro do Date()
        
        2) Funcao .map() pode receber tambem o indice
        do item em que esta
        
        */
        // Função que subtrai 1 do Mês, pois o mês nesse caso irá de 0 a 11  
        return new Date(...texto.split('-').map( (item, indice) => indice === 1? parseInt(item) - 1 : item))
    }

    static dateToText(data){
        // Expressão regular p/ identificar data no formato 'xxxx-xx-xx'
        // \d : Diz que queremos pegar digitos numericos
        // {n} : Quantidade de digitos
        // O ^ indica "começando com " e o $ "terminando com".


        
        // Fail Fast concept
        // Testa a ExpReg e se der False retorna o erro logo de cara
        if( ! /^\d{4}-\d{2}-\d{2}$/.test(texto) ) 
            throw new Error('Formato aaaa-mm-dd obrigatório!') 
        
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

}