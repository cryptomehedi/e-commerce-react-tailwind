import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const {name,img,price,ratings,seller} = props.product
    const {handelAddToCart} = props;
        // console.log(props.product);
    return (
        <div className="w-72 h-productHight hover:border-2 border-slate-400 rounded relative mt-12 ml-3 ">
            <img className="w-72 h-72 rounded-lg" src={img} alt="" />
            <div className="my-4">
                <h3 className="text-xl font-semibold mx-2">{name}</h3>
                <p className="mx-2 font-medium">Price : ${price}</p>
                <br></br>
                <p className="mx-2"><small>Seller : {seller}</small></p>
                <p className="mx-2"><small>Ratting : {ratings} stars</small></p>
            </div>
            <button onClick={()=> handelAddToCart(props.product)} className='w-full bg-orange-200 rounded-b-lg absolute bottom-0 cursor-pointer flex items-center justify-center hover:bg-orange-500 h-10'>
                <p className="mr-2">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;