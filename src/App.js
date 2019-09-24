import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import './fonts/fonts.css'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
