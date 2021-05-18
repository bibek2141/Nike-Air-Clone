import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div className="logoFit">
                <a className="logo" href="/">
                  <img src="https://i.pinimg.com/originals/e6/60/4a/e6604a8b3f42b4a59bd6178e93bb5bcc.png" alt="" />
                </a>
            </div>
            <div>
               <a href="/cart">Cart</a>
               <a href="/signin">Sign In</a> 
            </div>
        </header>
        <main>
          <div>
            <div className="row center">
            {
              data.prducts.map((product) =>(
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
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>   
                        </div>
                        <div className="price">
                            <h5>${product.price}</h5>
                        </div>
                    </div>
                </div>
              ))
            }
                
            </div>
          </div>
        </main>
 
        <footer className="row center">    
            All right reserved
        </footer>
        
    </div>
  );
}

export default App;
