import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    /* Check if the value is equal to the value user entered */
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const {loading,error,product} = productDetails;
    
    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch, productId]);
    return (
        <div>
          {loading?<LoadingBox></LoadingBox>
          :
          error?<MessageBox variant="danger">{error}</MessageBox>
          : (
            <div>
            <Link className="previous round" to="/">&#8249;</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="categoryPrice">
                                <h3 className="category">{product.category}</h3>
                                <h4 className="priceProduct">${product.price}</h4> 
                            </div>
                            
                        </li>

                        <li>
                            <h1>{product.name}</h1> 
                        </li>

                        <li>
                            <Rating rating ={product.rating} 
                            numReviews={product.numReviews} />
                        </li>
                   
                        <li>
                            Description: {product.description}
                        </li>   

                    </ul>

                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                    {product.countInStock > 0 ? (
                                        <span className="success">In Stock</span>
                                        ) : (
                                        <span className="error">Unavailable</span>
                                    )}
                                    </div>
                                </div>
                            </li> 

                            <li>
                                <button className="primary block btn-primary-dark btn-lg">Add to Bag</button>
                            </li>
                        </ul>
                    </div>                    
                </div>
                
            </div>
        </div>
          )}
            
        </div>
        
    )
}

