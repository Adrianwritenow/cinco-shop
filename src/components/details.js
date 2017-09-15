import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const data = require('../data/data.js');

class View extends Component {
  constructor(props) {
  super(props);
    this.state = {
      'cart': []
  }
    this.addToList = this.addToList.bind(this);
  }

  addToList = (e) => {
    e.preventDefault();
    let data = this.props.details;
    let pId = this.props.id;
    let endpoint = this.props.endpoint;

    let List = data.map((product,index)=>{
      if (product.id === pId) {
        let cart = this.state.cart;
        cart.push(product)
        this.setState({ cart: cart })
        console.log("im your cart",this.state.cart);
      }
    });
  }
  render(){
    let data = this.props.details;
    let pId = this.props.id;
    let endpoint = this.props.endpoint;

    let List = data.map((product,index)=>{
      if (product.id === pId) {
      return (
        <div key={product.name} className="col-lg-10 col-lg-offset-1 card">
          <div className="col-lg-6">
            <div className="profile">
              <i className="fa fa-space-shuttle" aria-hidden="true"></i>
            <form>
              <h3 className = "headings">
                  Purchase your {product.name} Today!
              </h3>
              <dl className="dl-horizontal">
                <dt>Cost</dt>
                <dd>{product.cost}</dd>
              </dl>
              <button onClick={this.addToList}>ADD TO CART</button>
              </form>
            </div>

          </div>
        </div>
      )
    }
  })
    return(
      <div className="row">
        {List}
      </div>
    )
  }
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'details': [],
      'endpoint':'',
      'pId':'',
    }
  }

  componentDidMount() {
    let {endpoint}= this.props.match.params;
    let {id}= this.props.match.params;

    if (endpoint === "Appliances") {
      console.log("Im endpoint", endpoint);
      let details = data.sections[0].Appliances;
      console.log('details var assign:',data.sections[0].Appliances);
      return(this.setState({details: details,
      endpoint:endpoint,
      pId:id}));
    }else if (endpoint === 'Electronics') {
      console.log("Im Electronics");
      let details = data.sections[1].Electronics;
      console.log('details var assign:',data.sections[1].Electronics);
      return(this.setState({details: details,
        endpoint:endpoint,
      pId:id}));
    }else {
      console.log("Im Lifestyle");
      let details = data.sections[2].LifeStyle;
      console.log('details var assign:',data.sections[2].LifeStyle);
      return(this.setState({details: details,
        endpoint:endpoint,
      pId:id}));
    }
  }
  render() {
    console.log('render', this.state)
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
              <h1>Cinco Shop</h1>
          </div>
          <View details={this.state.details} endpoint={this.state.endpoint} id={this.state.pId}/>
          <Cart cart=this.state.cart>
        </div>
      </div>
    );
  }
}

export default Details;
