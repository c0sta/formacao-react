import React, { Fragment } from 'react'
import Header from '../Header/Header'

const Autores = () => {
    const autores = [
        { 
          nome: 'Paulo',
          livro: 'React',
          preco: '1000'
        },
        {
          nome: 'Daniel',
          livro: 'Java',
          preco: '99'
        },
        {
          nome: 'Marcos',
          livro: 'Design',
          preco: '150'
        },
        {
          nome: 'Bruno',
          livro: 'DevOps',
          preco: '100'
        }
      ]
    return(
        <Fragment>
            <Header />
            <div className="container">
                <h1 className="center">Autores</h1>
                <table>
                    <thead style={{fontSize: '20px',fontWeight: 'bold'}}>Autores</thead>
                    <tbody>
                        {
                            autores.map( autor => 
                            (  <tr>
                            <td>{autor.nome}</td>
                                </tr>
                            ))
                        }            
                    </tbody>
                </table>
            </div>
        </Fragment>
     )
}
export default Autores