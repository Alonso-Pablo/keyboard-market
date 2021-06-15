import React, { useContext }  from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
    const randomId = Math.random() * (300000000 - 1) + 1;
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;


    const handleAddToCart = product => () => {
        const productInCart = {...product, idCart: `${randomId}`}
        addToCart(productInCart);
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    )
}

export default Products;