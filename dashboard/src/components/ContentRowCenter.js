import React from 'react';
import ProductsInDb from './ProductsInDb';
import LastProductInDb from './LastProductInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            <LastProductInDb />           
            <ProductsInDb/>
            
        </div>
    )
}

export default ContentRowCenter;