import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowTotalProducts from './ContentRowTotalProducts';
import {Routes,Route,Link} from 'react-router-dom'

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Callwatch Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					
					<ContentRowTotalProducts />
					<ContentRowCenter />
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;