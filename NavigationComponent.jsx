import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import CartComponent from '../CartComponent/CartComponent'
import './NavigationComponent.css'
const NavigationComponent = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <nav className='nav-bar'>
                    <h3>E-Commerce Store</h3>
                    <hr />
                    <ul>
                        <li id='home'><Link to='/Home'><b>Home</b></Link></li>
                        <li id='cart'><Link to='/cart'><b>Cart</b></Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route exact path='/REACT-WEBSITE' element={<HomeComponent/>}></Route>
                    <Route exact path='/cart' element={<CartComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default NavigationComponent