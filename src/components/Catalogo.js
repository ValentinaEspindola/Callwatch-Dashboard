import React, {Component}from "react";
import ProductsCatalogo from './ProductsCatalogo'


class Catalogo extends Component{
  constructor(){
      super()
      this.state = {
          productslist: []
      }
  }
  componentDidMount(){
      fetch('http://localhost:3001/api/products')
          .then(respuesta => {
              return respuesta.json()
          })
          .then(products => {
            console.log(products)
            return this.setState({productslist: products.products})
          })
          .catch(error => console.log(error))
  }

  render(){
      return (
      <React.Fragment>
      <div className="col-lg-6 mb-4 cat">						
                   
                   <div className="card shadow mb-4">
                       <div className="card-header py-3">
                           <h2 className="m-0 font-weight-bold text-gray-800">Productos en base de datos</h2>
                       </div>
                       <div className="card-body">
                           <div className="row">
                           {this.state.productslist.map((products,index)=>{
                          return <ProductsCatalogo {...products} key={index} />
                          })}
                             
                           </div>
                   </div>
                   </div>
      </div>
      
      </React.Fragment>
      )
      }
}


export default Catalogo;