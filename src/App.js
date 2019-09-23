import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import './fonts/fonts.css'
import HomePage from './pages/homepage/HomePage'

const HatsPage = (props) => {
  console.log(props)
  return <h1>Hats Page</h1>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
