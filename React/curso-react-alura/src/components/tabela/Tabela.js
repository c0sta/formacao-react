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
                <tr key={autor.nome}>

                    <td>{autor.nome}</td>
                    <td>{autor.livro}</td>
                    <td>{autor.preco}</td>
                    <td>
                        <button>Remover</button>
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

        const { autores } = this.props
        console.table(autores)

        return(
            <table>
                <TableHead />
                <TableBody autores = { autores }/>        
          </table>
        )
    }
}