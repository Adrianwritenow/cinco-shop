import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const data = require('../data/data.js');

class List extends Component {
  render(){
    console.log('props', this.props.electronics)
    let data = this.props.electronics;
    let List = data.map((product,index)=>{
      console.log("i'm a product", product);
      console.log("product name",product.name);
        let endpoint = "Electronics";

      return (
        <div key={product.name} className="col-lg-10 col-lg-offset-1 card">
          <div className="col-lg-6">
              <i className="fa fa-space-shuttle" aria-hidden="true"></i>
              <h3 className = "headings">
              <Link to={`/details/${endpoint}/${product.id}`}>
                {product.name}
              </Link>              </h3>
              <hr/>
              <dl className="dl-horizontal">
                <dt>Description</dt>
                <dd>{product.desctiption}</dd>
                <dt>Cost</dt>
                <dd>{product.cost}</dd>
              </dl>
          </div>
          <iframe width="420" height="315" src={product.commercial} frameBorder="0" allowFullScreen></iframe>
        </div>
      )
    })
    return(
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1">
          <h1 className="headings">Electronics</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

class Electronics extends Component {
  constructor(props) {
      super(props);
      this.state = {
        'electronics': []
      }
    }

    componentDidMount(){
      console.log("DATA chk:", data);
      let electronics = data.sections[1].Electronics;
      console.log("data.sections[1]:",data.sections[1]);
      this.setState({electronics: electronics})
      console.log("data.sections[1].Electronics:",data.sections[1].Electronics);
    }


    render() {
      console.log('render', this.state)
      // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
      // Each component needs to receive state via props.
      return (
        <div className="app-body offset col-lg-10 col-lg-offset-1">
          <List electronics={this.state.electronics}/>
        </div>
      );
    }
  }


export default Electronics;
