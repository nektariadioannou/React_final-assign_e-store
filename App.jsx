import React from 'react';
import CartProvider from './Context/CartProvider'
import NavigationComponent from './Components/NavigationComponent/NavigationComponent'
import HomeComponent from './Components/HomeComponent/HomeComponent';
import './App.css'
function App() {
    return (
        <div className='bg'>
        <CartProvider>
            <NavigationComponent/>
            <HomeComponent/>
        </CartProvider>
        </div>
    )
}

export default App;