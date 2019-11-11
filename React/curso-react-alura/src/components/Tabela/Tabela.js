import React, {Component} from 'react'

const TableHead = () => {
    return(
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const trs = props.autores.map(
        autor => {
            return (
                <tr key={autor.id}>

                    <td>{autor.nome}</td>
                    <td>{autor.livro}</td>
                    <td>{autor.preco}</td>
                    <td>
                        <button onClick={ () => props.removeAutor(autor.id) } className="waves-effect waves-light btn red">
                            <i className="material-icons left">delete</i> 
                            Remover
                        </button>
                    </td>
                </tr>
            )
    })

    return(
        <tbody>
            {trs}
        </tbody>
    )
}

export default class Tabela extends Component{



    render(){

        const { autores, removeAutor } = this.props
        //console.table(autores)

        return(
            <table className="centered highlight ">
                <TableHead />
                <TableBody autores = { autores } removeAutor={removeAutor}/>        
          </table>
        )
    }
}