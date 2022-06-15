import React, {Component,useState,useEffect,useRef}from "react";
import { useParams } from "react-router-dom";


function ProductDetail(){
    const [Productos, setProducto] = useState('')
    const id = (Number(Object.values(useParams())))
    useEffect(()=>{
        fetch('http://localhost:3001/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(products => {
            
              let producto = products.products.find(producto=>producto.id === id) 
              console.log(producto)
              setProducto(producto)
            })
            .catch(error => console.log(error))
        },[id])
    
    return(
        <React.Fragment>
           <div className="col-lg-6 mb-4 cat">
       <div className="card shadow mb-4">
           <div className="card-header py-3">
               <h5 className="m-0 font-weight-bold text-gray-800">Último lanzamiento</h5>
           </div>
           <div className="card-body flex">
               <div className="text-center">
                   <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 max-img" style={{width: 80 +'rem'}} src={(Productos.imagen)} alt=" Star Wars - Mandalorian "/>
               </div>
               <div className="">
               <h4 className="m-0 font-weight-bold text-gray-800">{Productos.nombre}</h4>
               <h5>Categoría : {Productos.categoria}</h5>

               <h5>{Productos.descripcion}</h5>
               <h2 className="m-0 font-weight-bold text-gray-800">${Productos.precio}</h2>
               </div>
           </div>
       </div>
    </div>
        
        </React.Fragment>
        )
      }
    // {this.state.reloj.find(reloj=> reloj.id == 1)}
    // {this.state.genresList.map((category,index)=>{



export default ProductDetail;
    
 