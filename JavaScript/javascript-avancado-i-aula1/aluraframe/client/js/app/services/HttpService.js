class HttpService {

    get(url){
        return new Promise( 
            (resolve, reject) => {
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
                            resolve(JSON.parse(xhr.responseText)
                                
                            )
                            
                                
                        } else {
                            reject('Não foi possível obter as negociações')
                            
                        }
                }        
                //alert('certin')
            }
            xhr.send()
            }
        )
    }

}