import React from 'react';

function Color(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                     {props.color}
                    </div>
                   
                </div>
            </div>
        </React.Fragment>
    )
}
export default Color;