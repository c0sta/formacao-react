const Api = {
    ListaAutores: () => {
        return fetch('http://localhost:8000/api/autor')
    },
    
    ListaNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome')
    },

    ListaLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro')
    },

    CriaAutor: autor => {
        return fetch(`http://localhost:8000/api/autor`, 
        {
            method: 'POST', 
            headers: { 'content-type': 'application/json' },
            body: autor
        })
        .then(
        )
    },
    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
    },
    TrataErros: res => { 
        if( !res.ok ) {
            throw Error(res.responseText)
        }
        return res.json()
    }
    
}

export default Api