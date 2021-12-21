import React from 'react';
import './Logo.css';
import productLogo from '../../assets/Images/product_logo.jpg';

const Logo = (props) => {

    return (
        <div className="Logo">
            <img src={productLogo} alt="MyProduct"/>
        </div>
    )
}

export default Logo;