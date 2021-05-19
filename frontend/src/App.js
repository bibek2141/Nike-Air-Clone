import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
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
          <Route path="/product/:id" component={ProductScreen}></Route>
          {/*exact = If path is / then go to this screen*/ }
          <Route path="/" component={HomeScreen} exact></Route>
          
        </main>
 
        <footer className="row center">    
            All right reserved
        </footer>

        
        
      </div>
    </BrowserRouter>

  );
}

export default App;
