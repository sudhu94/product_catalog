import React from 'react';
import './Toolbar.css';
// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <div className="Logo">
                <h3>My Product</h3>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default Toolbar;