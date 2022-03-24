import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Shop = () => {
    
    const [products , setProducts] = useState([])
    const [cart , setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    useEffect( () => {
        const storedCart = getStoreCart()
        const savedCart = []
        for(const id in storedCart) {
            const addedProduct = products.find(product=> product.id === id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    },[products])

    const handelAddToCart = (selectedProduct)=>{
        let newCart;
        const existing = cart.find(product => product.id === selectedProduct.id);
        if (!existing) {
            selectedProduct.quantity = 1
            newCart = [...cart , selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            existing.quantity = existing.quantity + 1
            newCart = [...rest , existing]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className="grid grid-cols-shop_col">
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product => <Product 
                    product={product} 
                    key={product.id}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
            }
            </div>
            <div className="bg-amber-700/70">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;