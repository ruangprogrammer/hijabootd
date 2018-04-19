import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';


//import Header from './components/Header';
//import Content from './components/Content';
//import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (


		<Router>
		     <Switch>
		        <Route exact path='/' component={Home} />
		        <Route path='/productdetail/:id' component={ProductDetail} />
		     </Switch>
		</Router>


    );
  }
}

export default App;
