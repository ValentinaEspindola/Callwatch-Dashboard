import React from 'react';
import {Link} from 'react-router-dom'
function ProductsCatalogo(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4" >
            <div className="card-body">
             <div className="text-center">
                 <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={(props.imagen)} alt=" Star Wars - Mandalorian "/>
             </div>
             <h4 className="m-0 font-weight-bold text-gray-800">{props.nombre}</h4>
             <p>{props.descripcion}</p>
             <Link to={`/catalogo/producto/${props.id}`} className="btn btn-danger" target="_blank" rel="nofollow">View movie detail</Link>
         </div>
            </div>
        </React.Fragment>
    )
}
export default ProductsCatalogo;