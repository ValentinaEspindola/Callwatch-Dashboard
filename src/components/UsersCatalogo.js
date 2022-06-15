import React from 'react';

function UsersCatalogo(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4" >
            <div className="card-body">
             <h4 className="m-0 font-weight-bold text-gray-800">{props.nombre}</h4>
             <p>{props.email}</p>
         </div>
            </div>
        </React.Fragment>
    )
}
export default UsersCatalogo;