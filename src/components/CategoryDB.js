import React, {Component}from "react";
import Category from "./Category";
import Color from "./Color";

class CategoryDB extends Component{
  constructor(){
      super()
      this.state = {
          categoryList: [],
          colorslist: []
      }
  }
  componentDidMount(){
      fetch('http://localhost:3001/api/products')
          .then(respuesta => {
              return respuesta.json()
          })
          .then(products => {
            
            return this.setState({categoryList: products.countByCategory, colorslist : products.color})
          })
          .catch(error => console.log(error))
  }

  render(){
      return (
      <React.Fragment>
      <div className="col-lg-6 mb-4">						
                   <div className="card shadow mb-4">
                       <div className="card-header py-3">
                           <h6 className="m-0 font-weight-bold text-gray-800">Categorias en base de datos</h6>
                       </div>
                       <div className="card-body">
                           <div className="row">
                           {this.state.categoryList.map((category,index)=>{
                          return <Category {...category} key={index} />
                          })}
                             
                           </div>
                   </div>
                   </div>
                   <div className="card shadow mb-4">
                       <div className="card-header py-3">
                           <h6 className="m-0 font-weight-bold text-gray-800">Colores en base de datos</h6>
                       </div>
                       <div className="card-body">
                           <div className="row">
                           {this.state.colorslist.map((colors,index)=>{
                          return <Color {...colors} key={index} />
                          })}
                             
                           </div>
                   </div>
                   </div>
      </div>
      
      </React.Fragment>
      )
      }
}


export default CategoryDB;