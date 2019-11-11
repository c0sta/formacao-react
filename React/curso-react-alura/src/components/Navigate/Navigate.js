import React from 'react'

import { NavLink } from 'react-router-dom'

const Navigate = props => {
    return (
        <NavLink
            activeStyle={{backgroundColor: '#7e57c2'}}
            // Aplicando todas as props da instancia neste componente, como exemplo o to=""
            {...props}
        />
    )
}
export default Navigate