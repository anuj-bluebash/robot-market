import React from 'react'
import { Route } from 'react-router-dom'

import ShopPage from './pages/shop/shop.component'

import Header from './components/header/header.component'

import "./App.css";

class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Route exact path="/" component={ShopPage} />
      </div>
    )
  }
}



export default App;
