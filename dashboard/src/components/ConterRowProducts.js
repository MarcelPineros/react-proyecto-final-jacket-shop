import React from 'react';
import SmallCard from './SmallCard';


let ProductsInDb = {
    title: 'PRODUCTOS EN BASE DE DATOS',
    color: 'primary', 
    cuantity: 22,
    icon: 'fa-clipboard-list'
}


let usersQuantity = {
    title:'USUARIOS EN BASE DE DATOS' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [ProductsInDb, usersQuantity];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            {cartProps.map( (products, i) => {

                return <SmallCard {...products} key={i}/>
            
            
            })}
            
        </div>
    )
}

export default ContentRowProducts;