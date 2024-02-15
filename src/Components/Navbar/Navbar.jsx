import React from 'react'
import './Navbar.css'
import { FaUser} from "react-icons/fa6";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
        <nav className="nav">
        <div className="navigation">
            <div className="nav_header">
                <h2 className="nav_logo">Healing <span>Bird</span></h2>
            </div>
            <div className="nav_links">
                <ul>
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>BLOG</li>
                </ul>
            </div>
            <div className="nav_icons">
            <FaSearch className='icon'/>
            <FaShoppingCart className='icon' />
            <FaUser className='icon'/>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar