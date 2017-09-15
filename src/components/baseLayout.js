import React, {Component} from 'react';
import { Route } from 'react-router-dom';

// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom';
import LifeStyle from './lifeStyle';
import Appliances from './appliances';
import Electronics from './electronics';
import Explorer from './explorer';
import Details from './details';


export default class BaseLayout extends Component {
  constructor(props) {
  super(props);
    this.state = {
      'cart': []
  }
    this.addToList = this.addToList.bind(this);
  }
  addToList = (data, pId, endpoint) => {
    console.log("Im THE DATA:",data);
    console.log("Im THE pId",pId);
    console.log("Im THE endpoint",endpoint);

    data.forEach((product)=>{
      if (product.id === pId) {
        let cart = this.state.cart;
        this.setState({ cart: cart.concat(product)})
      }
    });
    console.log("im your cart",this.state.cart);

  }

  render(){
    const childWithProp = React.Children.map(this.props.children, (child) => {
    return React.cloneElement(child, {add: this.addToList});
});
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                <NavLink activeClassName="selected" className="nav-link" exact to="/" activeStyle={{color:"yellow"}}>Home</NavLink>

                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" exact to="/Appliances">Appliances</NavLink>

                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" exact to="/Electronics">Electronics</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected" className="nav-link" exact to="/LifeStyle">LifeStyle</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/appliances" component={Appliances}/>
         <Route path="/electronics" component={Electronics}/>
         <Route path="/lifestyle" component={LifeStyle}/>
         <Route path="/details/:endpoint/:id" render={(props)=><Details add={this.addToList}{...props}/>}/>
         <Route exact path="/" component={Explorer}/>
        <footer className="col-lg-12">
            CINCO
        </footer>
      </div>
    );
  }
}
