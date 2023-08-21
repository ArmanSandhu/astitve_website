import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown';
import { MenuItems } from '../MenuItem/MenuItem';

// https://www.youtube.com/watch?v=T2MhVxJxsL0

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    
    const handleMenuClick  = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => setDropdown(false);

    const handleHideButtonClick = () => {
        window.location.replace('https://google.com');
    }

    return (
        <nav className="navbar_container">
            <Link to='/' className='site_title'>
                Astitve
            </Link> 

            <div className='navbar'>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>

                    <li className='nav_item'>
                        <Link to='/' className='nav_links' onClick={closeMobileMenu}>Home</Link>
                    </li>

                    <li className='nav_item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        {/* <Link to='/about' className='nav_links' onClick={closeMobileMenu}>About <i className='fas fa-caret-down' /></Link> */}
                        <div className='nav_links'>About <i className='fas fa-caret-down' /></div>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className='nav_item'>
                        <Link to='/contact' className='nav_links' onClick={closeMobileMenu}>Contact Us</Link>
                    </li>

                    <li className='nav_item'>
                        <Link to='/donate' className='nav_links' onClick={closeMobileMenu}>Donate</Link>
                    </li>

                    <li className='nav_item'>
                        <button className='btn' onClick={handleHideButtonClick}>Hide Screen</button>
                    </li>
                </ul>
            </div>

            <div className='menu_icon' onClick={handleMenuClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>    
        </nav>
    );
}

export default Navbar;