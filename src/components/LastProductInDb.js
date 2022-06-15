import React, {Component}from "react";
import {Link} from 'react-router-dom' 

class LastProductInDb extends Component{
  constructor(){
      super()
      this.state = {
          reloj: []
      }
  }
  componentDidMount(){
      fetch('http://localhost:3001/api/products')
          .then(respuesta => {
              return respuesta.json()
          })
          .then(products => {
            let lastProduct = products.count
            console.log(lastProduct)
            let reloj = products.products.find(reloj => reloj.id === lastProduct)
            let imagen = reloj.imagen
            console.log(imagen)
            return this.setState({reloj: reloj})
          })
          .catch(error => console.log(error))
  }

  render(){
      return (
      <React.Fragment>
         <div className="col-lg-6 mb-4">
     <div className="card shadow mb-4">
         <div className="card-header py-3">
             <h5 className="m-0 font-weight-bold text-gray-800">Último lanzamiento</h5>
         </div>
         <div className="card-body">
             <div className="text-center">
                 <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={(this.state.reloj.imagen)} alt=" Star Wars - Mandalorian "/>
             </div>
             <h4 className="m-0 font-weight-bold text-gray-800">{this.state.reloj.nombre}</h4>
             <p>{this.state.reloj.descripcion}</p>
             <Link to={`/catalogo/producto/${this.state.reloj.id}`} className="btn btn-danger" target="_blank" rel="nofollow" >View movie detail</Link>
         </div>
     </div>
 </div>
      
      </React.Fragment>
      )
    }
}
// {this.state.reloj.find(reloj=> reloj.id == 1)}
// {this.state.genresList.map((category,index)=>{

export default LastProductInDb;
    
 