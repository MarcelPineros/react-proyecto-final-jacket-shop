import React, { Component } from "react";

class ProductsInDb extends Component {
  constructor (){
    super()
    this.state = {
      productList : []
    }
  }
  componentDidMount () {
    fetch("api/products/detail")
    .then (respuesta => respuesta.json())
    .then (products => {
      this.setState({productList: products.data})
    })
    .catch ( error => console.log(error))
  }
  render() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
           Products in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Cuero</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Jean</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Jean-Cuero</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Impermeable</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Corduroy</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Algodon</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>  
  );
}
}

export default ProductsInDb

/*import { useEffect, useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([]);

    
          
    useEffect(() =>{

        const url = "https://jacket_shop.com/api/products";
        fetch(url)
            .then(response => response.json())
            .then(({data}) =>{
                setProducts(data)
                console.log(data);
            })

    }, [])

   

  return (
    <section className=''>
        
  
        <hr />
        
        <div className='products'>
            
            {
                products.map(product =>
                   (<Products key={product.name} products={product}/>)
                )
            }
            
        </div>

    </section>
  )
}

export default Products*/

