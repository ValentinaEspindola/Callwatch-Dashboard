import React, {Component}from "react";

class rowQuantity extends Component{
  constructor(){
      super()
      this.state = {
          allProducts: [],
          allUsers: []

      }
  }
  async componentDidMount(){
        let products = await fetch('http://localhost:3001/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(products => {
            
                return this.setState({allProducts: products})
              })
            
        let user = await fetch('http://localhost:3001/api/users')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(users => {
            
                return this.setState({allUsers: users})
              })

      }
        
    render (){ return ( 
        <div className="row">
            
            <div className="col-md-4 mb-4">
            <div className='card border-left- shadow h-100 py-2'>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className='text-xs font-weight-bold text- text-uppercase mb-1'> Total de productos</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.allProducts.count}</div>
                        </div>
                        <div className="col-auto">
                            <i className='fas fa-2x text-gray-300'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ACA TERMINA PRODUCTOS EMPIEZA USUSARIOS  */}
        <div className="col-md-4 mb-4">
            <div className='card border-left- shadow h-100 py-2'>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className='text-xs font-weight-bold text- text-uppercase mb-1'> Total de usuarios</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.allUsers.count}</div>
                        </div>
                        <div className="col-auto">
                            <i className='fas fa-2x text-gray-300'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ACA TERMINA PRODUCTOS EMPIEZA CATEGORIAS  */}
        <div className="col-md-4 mb-4">
            <div className='card border-left- shadow h-100 py-2'>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className='text-xs font-weight-bold text- text-uppercase mb-1'> Total de categorias</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.allProducts.countCategorias}</div>
                        </div>
                        <div className="col-auto">
                            <i className='fas fa-2x text-gray-300'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
}

export default rowQuantity;