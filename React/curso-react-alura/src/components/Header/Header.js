import React from 'react'
// Link faz a troca de rotas sem atualizar a página 
import Navigate from '../Navigate/Navigate'
const Header = () => {

    return(
        <nav>
            <div className="nav-wrapper deep-purple">
                <Navigate to="/" activeStyle={{backgroundColor: '#673ab7'}} className="brand-logo">Casa do Código</Navigate>
                <ul className="right">
                    <li><Navigate to="/autores"> Autores </Navigate></li>
                    <li><Navigate to="/livros"> Livros </Navigate></li>
                    <li><Navigate to="/precos"> Preços </Navigate></li>
                </ul>
            </div>
        </nav>
    )

}

export default Header