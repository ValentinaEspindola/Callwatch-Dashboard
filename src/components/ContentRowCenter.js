import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoryDB from './CategoryDB';

function ContentRowCenter(){
    return (
        <div className="row">
            
            <CategoryDB />
            <LastProductInDb />
            
            

        </div>
    )
}

export default ContentRowCenter;