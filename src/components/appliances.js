import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const data = require('../data/data.js');

class List extends Component {
  render(){
    console.log('props', this.props.Appliances)
    let data = this.props.appliances;
    let List = data.map((product,index)=>{
      console.log("i'm a product", product);
      console.log("product name",product.name);
        // We use 'endpoint' to extract the enpoint from the API url.
        let endpoint = "Appliances";


      return (
        <div key={product.name} className="col-lg-10 col-lg-offset-1 card">
          <div className="col-lg-6">
              <i className="fa fa-space-shuttle" aria-hidden="true"></i>
              <h3 className = "headings">
              <Link to={`/details/${endpoint}/${product.id}`}>
                {product.name}
              </Link>
              </h3>
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
          <h1 className="headings">Appliances</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

class Appliances extends Component {
  constructor(props) {
      super(props);
      this.state = {
        'appliances': []
      }
    }

    componentDidMount(){
      console.log("DATA chk:", data);
      let appliances = data.sections[0].Appliances;
      console.log("data.sections[0]:",data.sections[0]);
      this.setState({appliances: appliances})
      console.log("data.sections[0].appliances:",data.sections[0].Appliances);
    }


    render() {
      console.log('render', this.state)
      // Your render should consist of the BaseLayout with the following children componenets: Appetizers, Entres, and Dessert.
      // Each component needs to receive state via props.
      return (
        <div className="app-body offset col-lg-10 col-lg-offset-1">
          <List appliances={this.state.appliances}/>
        </div>
      );
    }
  }


export default Appliances;
