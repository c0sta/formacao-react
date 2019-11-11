import React, { Fragment } from 'react'
import Header from '../Header/Header'

const Precos = () => {
    const precos = [
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
                
                <h1 className="center">Preços</h1>
                
                <table>
                    <thead style={{fontSize: '20px',fontWeight: 'bold'}}>
                        Preços
                    </thead>
                    <tbody>
                        {
                            precos.map( preco => 
                            (  <tr>
                                    <td>{preco.preco}</td>
                                </tr>
                            ))
                        }            
                    </tbody>
                </table>
            </div>
        </Fragment>
     )
}
export default Precos