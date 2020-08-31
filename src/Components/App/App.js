import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from '../Pages/HomePage'
import CartPage from '../Pages/CartPage'
import ShopHeader from '../ShopHeader/ShopHeader'

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path='/'
                       component={HomePage}
                       exact />
                <Route path='/cart'
                       component={CartPage}/>
            </Switch>
        </main>
    )
}

export default App