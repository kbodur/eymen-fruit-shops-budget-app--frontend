import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='captain'>
                    <Link to="/transactions">Eymen's Fruit Shop Budget App</Link>
                </li>
                <li className='new'>
                    <Link to="/transactions/new">New Transaction</Link>
                </li>
                <li className='login'>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
