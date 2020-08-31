import React from 'react'
import './ShopHeader.css'

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            <a className='logo text-dark' href='#asd'>ReStore</a>
            <a className='shopping-cart' href='#asd'>
                <i className='cart-icon fa fa-shopping-cart' />
                {numItems} items (${total})
            </a>
        </header>
    )
}

export default ShopHeader