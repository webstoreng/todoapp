import React from 'react'
import { MdHome } from 'react-icons/md'

function Header() {
    return (
        <div className="header">
            <h1>DO-ME</h1>
            <MdHome size="1.3em" className="home"/>
        </div>
    )
}

export default Header
