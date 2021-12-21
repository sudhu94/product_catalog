import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const NavigationItems = () => {

    const items = useSelector(state=> state.myCart.items)

    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/my-cart">
                <Badge badgeContent={items.length} color="error">
                    MyCart
                </Badge>

            </NavigationItem>
        </ul>
    );
}

export default NavigationItems;