import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='h-20 bg-slate-800 flex items-center justify-between pl-36 pr-36'>
            <img src={logo} alt="" />
            <div>
                <a className='text-white text-lg ml-9 hover:text-orange-500 hover:overline' href="/shop">Shop</a>
                <a className='text-white text-lg ml-9 hover:text-orange-500 hover:overline' href="/orders">Orders</a>
                <a className='text-white text-lg ml-9 hover:text-orange-500 hover:overline' href="/inventory">Inventory</a>
                <a className='text-white text-lg ml-9 hover:text-orange-500 hover:overline' href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;