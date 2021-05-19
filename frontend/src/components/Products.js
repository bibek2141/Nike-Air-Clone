import React from 'react'
import Rating from './Rating';

export default function Products(props) {
    const {product} = props;
    return (
        <div key={product._id} className="card">
                    <a href={`${product._id}`}>
                        <img className="medium" 
                        src={product.image} 
                        alt={product.name}/>
                    </a>
                    <div className="card-body">
                        <a href={`${product._id}`}> 
                            <h2 className="product-title">{product.name}</h2>   
                        </a>
                        <div className="gender">
                            <h3>{product.category}</h3>
                        </div>
                        <Rating 
                            rating={product.rating} 
                            numReviews={product.numReviews}>
                        </Rating>
                        <div className="price">
                            <h5>${product.price}</h5>
                        </div>
                    </div>
                </div>
    );
}