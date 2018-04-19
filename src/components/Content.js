import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { Button } from 'reactstrap';

class Content extends Component {
  render() {
    return (
    <div className="container">

      <div className="row">

        <div className="col-lg-8">

          <h1 className="mt-4">Post Title</h1>

          <p className="lead">
            by
            <a href="#">Start Bootstrap</a>
          </p>


          <p>Posted on January 1, 2018 at 12:00 PM</p>

     

          <img className="img-fluid rounded" src={"http://placehold.it/900x300"} alt=""/>


      

  
          <div className="card my-4">
            <h5 className="card-header">Leave a Comment:</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <textarea className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>


        </div>


      

      </div>


    </div>
 
    );
  }
}

export default Content;
