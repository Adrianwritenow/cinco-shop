import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const data = require('../data/data.js');

class List extends Component {
  render(){
    console.log('props', this.props.LifeStyle)
    let data = this.props.lifeStyle;
    let List = data.map((product,index)=>{
      console.log("i'm a product", product);
      console.log("product name",product.name);
        // We use 'endpoint' to extract the enpoint from the API url.
        let endpoint = "LifeStyle";
        // return <li className="list-group-item" key={product}>
        // // <Link to={`/details/${endpoint}`}>
        // //   {endpoint}
        // // </Link>
        //   </li>

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
          <h1 className="headings">LifeStyle</h1>
          <hr/>
        </div>
        {List}
      </div>
    )
  }
}

class LifeStyle extends Component {
  constructor(props) {
      super(props);
      this.state = {
        'lifeStyle': []
      }
    }

    componentDidMount(){
      console.log("DATA chk:", data);
      let lifeStyle = data.sections[2].LifeStyle;
      this.setState({lifeStyle: lifeStyle})
    }


    render() {
      console.log('render', this.state)

      return (
        <div className="app-body offset col-lg-10 col-lg-offset-1">
          <List lifeStyle={this.state.lifeStyle}/>
        </div>
      );
    }
  }



export default LifeStyle;
