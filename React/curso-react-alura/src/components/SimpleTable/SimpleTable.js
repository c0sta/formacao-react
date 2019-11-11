import React, { Fragment } from 'react'

const SimpleTable = props => {


      const autor = props.dados.map(
        (item, index) =>(
            <tr key={index}>
               <td>{item.nome}</td>
            </tr>
            )
        )

    return(
        <Fragment>
  
                
                <table>
                    <thead style={{fontSize: '20px',fontWeight: 'bold'}}>
                        Autores
                    </thead>
                    <tbody>
                        {autor}
                    </tbody>
                </table>
        </Fragment>
     )
}
export default Autores