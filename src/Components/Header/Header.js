import {Link} from "react-router-dom"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const Header = () => {
    return (
        <div onClick={() => window.scroll(0, 0)} className="header">
            <span className="logo" ><Link to="/">Company Logo </Link></span>
            <span id= "head">for individuals</span>
            <span id= "head">for businesses</span>
            <span id= "head">outreach</span>
            <span id= "head">store</span>
            <span id= "head">blog</span>
            <span id= "head">about</span>
            <FontAwesomeIcon icon= {faUserAlt} id= "icon"/>
            <FontAwesomeIcon icon= {faShoppingBag} id= "icon"/>
        </div>
    )
}

export default Header
