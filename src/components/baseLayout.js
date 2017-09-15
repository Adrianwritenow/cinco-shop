import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "35vw",
      "color": "#fff",
      "backgroundImage": "url(./images/space.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
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
        {this.props.children}
        <footer className="col-lg-12">
            CINCO
        </footer>
      </div>
    );
  }
}
