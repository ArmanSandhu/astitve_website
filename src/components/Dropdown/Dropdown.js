import React, { useState } from 'react';
import { MenuItems } from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom'
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false);
    
    const handleClick  = () => setClick(!click);

  return (
    <ul onClick={handleClick} className={click ? 'dropdown_menu clicked' : 'dropdown_menu'}>
        {MenuItems.map((item, index) => {
            return (
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default Dropdown;