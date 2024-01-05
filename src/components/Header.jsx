import React, { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import Button from './UI/Button';

function Header() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Logo image" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>
                    Cart ({totalCartItems})
                </Button>
            </nav>
        </header>
    );
}

export default Header;
